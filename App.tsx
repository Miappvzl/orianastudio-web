import React, { useState } from 'react';
import { ViewMode } from './types';
import { ProposalView } from './components/ProposalView';
import { LiveSite } from './components/LiveSite';
import { Eye, FileText } from 'lucide-react';

export default function App() {
  // We start with the Proposal view to answer the prompt directly, 
  // but allow instant switching to the Live Site.
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.PROPOSAL);

  return (
    <div className="relative">
      {/* Floating Toggle for easy switching */}
      <div className="fixed top-4 right-4 z-[100] flex bg-white rounded-full shadow-lg border border-gray-200 p-1">
        <button
          onClick={() => setViewMode(ViewMode.PROPOSAL)}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
            viewMode === ViewMode.PROPOSAL 
              ? 'bg-slate-900 text-white shadow' 
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          <FileText size={16} /> <span className="hidden sm:inline">Propuesta</span>
        </button>
        <button
          onClick={() => setViewMode(ViewMode.LIVE_SITE)}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
            viewMode === ViewMode.LIVE_SITE 
              ? 'bg-brand-600 text-white shadow' 
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          <Eye size={16} /> <span className="hidden sm:inline">Ver Web</span>
        </button>
      </div>

      {viewMode === ViewMode.PROPOSAL ? (
        <ProposalView onSwitchToLive={() => setViewMode(ViewMode.LIVE_SITE)} />
      ) : (
        <LiveSite />
      )}
    </div>
  );
}