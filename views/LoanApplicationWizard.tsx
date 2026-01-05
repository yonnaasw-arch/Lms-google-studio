
import React, { useState } from 'react';
import { LoanType } from '../types';
import { PRODUCT_ICONS } from '../constants';
import { useNavigate } from 'react-router-dom';

const LoanApplicationWizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: LoanType.PERSONAL,
    amount: 10000,
    tenure: 12,
    reason: '',
    collateralDesc: '',
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleApply = () => {
    // Simulate submission
    alert('Application submitted successfully! Redirecting to dashboard...');
    navigate('/borrower');
  };

  const steps = [
    { title: 'Product Selection', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { title: 'Loan Details', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1m4-12H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z' },
    { title: 'Review & Submit', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-12 px-8">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step > i + 1 ? 'bg-indigo-600 border-indigo-600 text-white' : 
                step === i + 1 ? 'border-indigo-600 text-indigo-600 shadow-lg shadow-indigo-100' : 
                'border-slate-200 text-slate-300'
              }`}>
                {step > i + 1 ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                )}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${step === i + 1 ? 'text-indigo-600' : 'text-slate-400'}`}>
                {s.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 mb-6 transition-colors duration-500 ${step > i + 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-500">
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Select Your Loan Product</h2>
              <p className="text-slate-500">Choose the financing solution that best fits your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[LoanType.PERSONAL, LoanType.BUSINESS, LoanType.MORTGAGE].map(type => (
                <button
                  key={type}
                  onClick={() => setFormData(prev => ({ ...prev, type }))}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.type === type ? 'border-indigo-600 bg-indigo-50/50 shadow-md' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${formData.type === type ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {PRODUCT_ICONS[type]}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{type} Loan</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {type === LoanType.PERSONAL ? 'Short-term needs with a guarantor.' : 
                     type === LoanType.BUSINESS ? 'Revenue-based growth capital.' : 
                     'Real estate purchase and refinance.'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Customize Your Terms</h2>
              <p className="text-slate-500">How much do you need and for how long?</p>
            </div>
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Loan Amount ($)</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData(p => ({ ...p, amount: Number(e.target.value) }))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-bold text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Tenure (Months)</label>
                <select
                  value={formData.tenure}
                  onChange={(e) => setFormData(p => ({ ...p, tenure: Number(e.target.value) }))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                >
                  {[6, 12, 24, 36, 48, 60, 120, 240, 360].map(m => (
                    <option key={m} value={m}>{m} Months</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Loan Purpose</label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => setFormData(p => ({ ...p, reason: e.target.value }))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all h-24"
                  placeholder="Tell us what these funds will be used for..."
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Final Review</h2>
              <p className="text-slate-500">Please confirm your application details before submission.</p>
            </div>
            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-8 space-y-6">
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-500 font-medium">Product Type</span>
                <span className="font-bold text-slate-900">{formData.type} Loan</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-500 font-medium">Principal Amount</span>
                <span className="font-bold text-slate-900 font-mono">${formData.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-500 font-medium">Duration</span>
                <span className="font-bold text-slate-900">{formData.tenure} Months</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-500 font-medium">Estimated APR</span>
                <span className="font-bold text-indigo-600">8.5%*</span>
              </div>
              <div className="text-xs text-slate-400 italic">
                *Interest rates are subject to underwriting review and final approval.
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 flex justify-between items-center gap-4 border-t border-slate-100 pt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${step === 1 ? 'opacity-0' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Back
          </button>
          
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleApply}
              className="px-10 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all transform hover:scale-105"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationWizard;
