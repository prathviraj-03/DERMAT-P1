'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, MicOff, PhoneOff, MessageSquare } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function TelemedicineRoom() {
  const params = useParams();
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col pt-20">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
          <h1 className="text-white font-medium">Consultation Room #{params.id}</h1>
        </div>
        <div className="text-white/60 text-sm">
          00:15:23 elapsed
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
        {/* Doctor Video Feed */}
        <div className="lg:col-span-3 bg-[#2a2a2a] rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
            alt="Doctor Feed" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-6 left-6 bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md">
            <p className="text-white font-medium">Dr. Sarah Jenkins</p>
            <p className="text-white/60 text-xs">Dermatologist</p>
          </div>
        </div>

        {/* Sidebar Space (Chat/Patient video) */}
        <div className="space-y-4 flex flex-col">
          {/* Patient Video Feed */}
          <div className="bg-[#2a2a2a] rounded-2xl aspect-video relative overflow-hidden border border-white/10 shadow-lg">
             <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop" 
              alt="Self Feed" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute bottom-3 left-3 bg-black/50 px-2 py-1 rounded-md backdrop-blur-md">
              <p className="text-white text-xs">You</p>
            </div>
            {isMuted && (
              <div className="absolute top-3 right-3 bg-red-500/80 p-1.5 rounded-full backdrop-blur-md text-white">
                 <MicOff className="h-3 w-3" />
              </div>
            )}
          </div>
          
          {/* Chat / Notes Area mocked */}
          <div className="flex-1 bg-[#2a2a2a] rounded-2xl border border-white/5 p-4 flex flex-col">
             <h3 className="text-white font-medium border-b border-white/10 pb-3 mb-3">Live Chat</h3>
             <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
               <div className="bg-[#1a1a1a] p-3 rounded-xl rounded-tl-none self-start max-w-[85%]">
                 <p className="text-sm text-white/80">Hello, can you hear me clearly?</p>
               </div>
               <div className="bg-[#c5a47e] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] text-white">
                 <p className="text-sm">Yes, perfectly doctor.</p>
               </div>
             </div>
             
             <div className="mt-4 flex gap-2">
               <input 
                 type="text" 
                 placeholder="Type a message..." 
                 className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a47e]"
               />
               <button className="bg-[#c5a47e] p-2 rounded-xl text-white hover:bg-[#b08d66] transition">
                 <MessageSquare className="h-5 w-5" />
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="h-24 bg-[#0a0a0a] flex items-center justify-center gap-6 pb-safe border-t border-white/5">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`h-14 w-14 rounded-full flex items-center justify-center transition ${isMuted ? 'bg-red-500 text-white' : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'}`}
        >
          {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        </button>
        <button className="h-14 w-14 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-[#3a3a3a] transition">
          <Video className="h-6 w-6" />
        </button>
        <button className="h-14 w-14 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition shadow-lg shadow-red-500/20">
          <PhoneOff className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}