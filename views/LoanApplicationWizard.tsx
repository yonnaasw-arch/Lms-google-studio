
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
    alert('Application submitted successfully!');
    navigate('/borrower');
  };

  const steps = [
    { title: 'Product', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { title: 'Details', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1m4-12H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z' },
    { title: 'Review', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <div className="max-w-2xl mx-auto py-4 lg:py-8 h-full flex flex-col">
      {/* Compact Step Indicator */}
      <div className="flex justify-between items-center mb-8 px-2 lg:px-8">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step > i + 1 ? 'bg-indigo-600 border-indigo-600 text-white' : 
                step === i + 1 ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 
                'border-slate-200 text-slate-300'
              }`}>
                {step > i + 1 ? (
                  <svg className="w-4 h-4 lg:w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 lg:w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                )}
              </div>
              <span className={`text-[9px] lg:text-xs font-bold uppercase tracking-wider text-center ${step === i + 1 ? 'text-indigo-600' : 'text-slate-400'}`}>
                {s.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mb-5 transition-colors duration-500 ${step > i + 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-10 flex-1 flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Select Product</h2>
                <p className="text-xs lg:text-sm text-slate-500">Choose a loan type</p>
              </div>
              <div className="space-y-3">
                {[LoanType.PERSONAL, LoanType.BUSINESS, LoanType.MORTGAGE].map(type => (
                  <button
                    key={type}
                    onClick={() => setFormData(prev => ({ ...prev, type }))}
                    className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all ${
                      formData.type === type ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50 hover:border-slate-100'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${formData.type === type ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {PRODUCT_ICONS[type]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{type}</h3>
                      <p className="text-[10px] text-slate-500">
                        {type === LoanType.PERSONAL ? 'Short-term needs.' : 
                         type === LoanType.BUSINESS ? 'Business growth.' : 
                         'Real estate.'}
                      </p>
                    </div>
                    {formData.type === type && (
                       <div className="ml-auto text-indigo-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                       </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Loan Details</h2>
                <p className="text-xs lg:text-sm text-slate-500">Set your amount and tenure</p>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Amount ($)</label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData(p => ({ ...p, amount: Number(e.target.value) }))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 text-base font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Tenure (Months)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[12, 24, 60].map(m => (
                      <button 
                        key={m}
                        onClick={() => setFormData(p => ({ ...p, tenure: m }))}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${formData.tenure === m ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-600'}`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Purpose</label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData(p => ({ ...p, reason: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm h-20"
                    placeholder="Describe purpose..."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Confirm</h2>
                <p className="text-xs lg:text-sm text-slate-500">Review before submission</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Type</span>
                  <span className="font-bold text-slate-900">{formData.type}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Amount</span>
                  <span className="font-bold text-slate-900">${formData.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Term</span>
                  <span className="font-bold text-slate-900">{formData.tenure} Months</span>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-900">Estimated Rate</span>
                  <span className="text-sm font-black text-indigo-600">8.5%*</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Mobile-First Actions */}
        <div className="mt-8 flex gap-3 border-t border-slate-100 pt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex-1 py-3 lg:py-4 px-4 bg-slate-100 text-slate-600 rounded-lg lg:rounded-xl font-bold text-xs lg:text-base hover:bg-slate-200 transition-all"
            >
              Back
            </button>
          )}
          
          <button
            onClick={step < 3 ? nextStep : handleApply}
            className={`flex-[2] py-3 lg:py-4 px-6 rounded-lg lg:rounded-xl font-bold text-xs lg:text-base shadow-lg transition-all ${step === 3 ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-indigo-600 text-white shadow-indigo-100'}`}
          >
            {step === 3 ? 'Confirm & Apply' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationWizard;
