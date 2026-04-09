'use client';

import * as React from 'react';
import { useAuth } from '@/components/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { Calendar, FileText, User, Clock, CheckCircle, Clock3, Download, Video } from 'lucide-react';
import Link from 'next/link';

export default function PatientDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<'appointments' | 'prescriptions' | 'profile'>('appointments');

  React.useEffect(() => {
    if (!user) router.push('/login');
    if (user && user.role !== 'patient') router.push('/login');
  }, [user, router]);

  if (!user || user.role !== 'patient') return null;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] pt-32 pb-24 text-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c5a47e]/20 border-2 border-[#c5a47e]/30">
             <span className="text-3xl font-serif text-[#c5a47e]">{user.name.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#c5a47e]">Patient Portal</h1>
          <p className="text-white/70 mt-2 text-lg">Welcome back, {user.name}</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-16 pb-24 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 bg-white rounded-3xl shadow-xl p-4 sticky top-24 shrink-0 border border-gray-100">
           <div className="space-y-2">
             <button 
               onClick={() => setActiveTab('appointments')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'appointments' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <Calendar className="h-5 w-5" />
               <span className="font-medium">Appointments</span>
             </button>
             <button 
               onClick={() => setActiveTab('prescriptions')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'prescriptions' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <FileText className="h-5 w-5" />
               <span className="font-medium">Prescriptions</span>
             </button>
             <button 
               onClick={() => setActiveTab('profile')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'profile' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <User className="h-5 w-5" />
               <span className="font-medium">Profile</span>
             </button>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 min-h-[500px]">
           {activeTab === 'appointments' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">My Appointments</h2>
                  <Link href="/book" className="px-4 py-2 bg-[#c5a47e] text-white rounded-full text-sm font-medium hover:bg-[#b08d66] transition">Book New</Link>
                </div>
                
                {/* Upcoming Appointment Card */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 p-6 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4">
                     <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Upcoming</span>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-orange-100 text-orange-600 flex flex-col items-center justify-center shrink-0">
                         <span className="text-xs font-bold uppercase">Oct</span>
                         <span className="text-xl font-bold">24</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Virtual Acne Consultation</h3>
                        <p className="text-gray-600 text-sm flex items-center gap-2 mt-1"><Clock3 className="h-4 w-4" /> 10:00 AM - 10:30 AM</p>
                        <p className="text-gray-600 text-sm flex items-center gap-2 mt-1"><User className="h-4 w-4" /> Dr. Sarah Jenkins</p>
                        <div className="mt-4">
                           <Link href="/consultation/1234" className="inline-flex items-center gap-2 bg-[#c5a47e] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#b08d66] transition shadow-md shadow-[#c5a47e]/20">
                             <Video className="h-4 w-4" /> Join Telemedicine Call
                           </Link>
                        </div>
                      </div>
                   </div>
                </div>

                {/* Past Appointments List */}
                <h3 className="font-serif font-bold text-lg mt-8 mb-4 text-gray-800">Past History</h3>
                <div className="space-y-4">
                   {[1, 2].map((i) => (
                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition bg-gray-50/50">
                        <div className="flex items-center gap-4">
                           <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                             <CheckCircle className="h-6 w-6" />
                           </div>
                           <div>
                             <h4 className="font-semibold text-gray-900">Hair Loss Assessment</h4>
                             <p className="text-xs text-gray-500">Sep {12 - i}, 2023 • Dr. Robert Chen</p>
                           </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-2">
                           <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition">View Details</button>
                           <button className="px-4 py-2 border border-[#c5a47e] text-[#c5a47e] rounded-xl text-sm font-medium hover:bg-[#c5a47e]/10 transition">Book Again</button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {activeTab === 'prescriptions' && (
             <div className="space-y-6">
                <div className="mb-8 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">My Prescriptions</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     { id: 'RX-8921', date: 'Oct 05, 2023', doctor: 'Dr. Sarah Jenkins', condition: 'Acne Vulgaris' },
                     { id: 'RX-7432', date: 'Aug 22, 2023', doctor: 'Dr. Robert Chen', condition: 'Routine Assessment' }
                   ].map((rx) => (
                     <div key={rx.id} className="border border-gray-200 rounded-2xl p-5 hover:border-[#c5a47e] hover:shadow-lg transition group bg-white">
                        <div className="flex justify-between items-start mb-4">
                           <div className="h-10 w-10 bg-[#c5a47e]/10 text-[#c5a47e] rounded-xl flex items-center justify-center">
                              <FileText className="h-5 w-5" />
                           </div>
                           <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-mono">{rx.id}</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{rx.condition}</h3>
                        <p className="text-sm text-gray-500 mb-4">{rx.date} • {rx.doctor}</p>
                        
                        <button className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-700 py-2.5 rounded-xl text-sm font-medium group-hover:bg-[#c5a47e] group-hover:text-white transition">
                          <Download className="h-4 w-4" /> Download PDF
                        </button>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {activeTab === 'profile' && (
             <div className="space-y-6 max-w-2xl">
                <div className="mb-8 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">Personal Profile</h2>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" defaultValue={user.name} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50 focus:border-[#c5a47e] transition" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700">Email Address</label>
                       <input type="email" defaultValue={(user as any).email || 'john@example.com'} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50 focus:border-[#c5a47e] transition" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700">Phone Number</label>
                       <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50 focus:border-[#c5a47e] transition" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                       <input type="date" defaultValue="1990-01-01" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50 focus:border-[#c5a47e] transition" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Medical History Notes</label>
                    <textarea rows={4} defaultValue="No known allergies. Previous treatment for mild eczema." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50 focus:border-[#c5a47e] transition resize-none"></textarea>
                  </div>

                  <div className="pt-4 flex justify-end">
                     <button type="submit" className="px-8 py-3 bg-[#c5a47e] text-white rounded-xl font-medium hover:bg-[#b08d66] transition shadow-lg shadow-[#c5a47e]/20">
                        Save Changes
                     </button>
                  </div>
                </form>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}