'use client';

import * as React from 'react';
import { useAuth } from '@/components/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { LineChart, CalendarDays, Users, DollarSign, CheckCircle, XCircle, TrendingUp, Calendar as CalendarIcon, User } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<'analytics' | 'bookings' | 'patients'>('analytics');

  React.useEffect(() => {
    if (!user) router.push('/login');
    if (user && user.role !== 'admin') router.push('/login');
  }, [user, router]);

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c5a47e]/20 border-2 border-[#c5a47e]/30">
             <span className="text-3xl font-serif text-[#c5a47e]">A</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#c5a47e]">Admin Console</h1>
          <p className="text-white/70 mt-2 text-lg">Hospital Management & Analytics</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-16 pb-24 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 bg-white rounded-3xl shadow-xl p-4 sticky top-24 shrink-0 border border-gray-100">
           <div className="space-y-2">
             <button 
               onClick={() => setActiveTab('analytics')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'analytics' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <LineChart className="h-5 w-5" />
               <span className="font-medium">Analytics</span>
             </button>
             <button 
               onClick={() => setActiveTab('bookings')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'bookings' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <CalendarDays className="h-5 w-5" />
               <span className="font-medium">Bookings</span>
             </button>
             <button 
               onClick={() => setActiveTab('patients')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${activeTab === 'patients' ? 'bg-[#c5a47e] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
             >
               <Users className="h-5 w-5" />
               <span className="font-medium">Patient Directory</span>
             </button>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 min-h-[600px]">
           {/* ANALYTICS TAB */}
           {activeTab === 'analytics' && (
             <div className="space-y-8">
                <div className="mb-6 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">Overview Analytics</h2>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 font-medium">Total Revenue</span>
                      <div className="p-2 bg-green-100 text-green-700 rounded-lg"><DollarSign className="w-5 h-5"/></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">$24,500</h3>
                    <p className="text-sm text-green-600 flex items-center gap-1 mt-2"><TrendingUp className="w-4 h-4"/> +14% from last month</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 font-medium">Appointments</span>
                      <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><CalendarIcon className="w-5 h-5"/></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">142</h3>
                    <p className="text-sm text-green-600 flex items-center gap-1 mt-2"><TrendingUp className="w-4 h-4"/> +5% from last month</p>
                  </div>

                  <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 font-medium">New Patients</span>
                      <div className="p-2 bg-purple-100 text-purple-700 rounded-lg"><User className="w-5 h-5"/></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">48</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">Steady growth</p>
                  </div>
                </div>

                {/* Mock Chart Area */}
                <div className="mt-8 border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-serif font-bold text-lg text-gray-800 mb-6">Appointments Over Past 7 Days</h3>
                  <div className="flex items-end gap-4 h-64 mt-4 px-2">
                    {[30, 45, 25, 60, 80, 50, 75].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        {/* Tooltip on hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded">
                          {height} appts
                        </div>
                        {/* Bar */}
                        <div 
                          className="w-full bg-[#c5a47e] rounded-t-md transition-all group-hover:bg-[#b08d66]"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500">Day {i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
           )}

           {/* BOOKINGS TAB */}
           {activeTab === 'bookings' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">Manage Bookings</h2>
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">3 Pending</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Patient</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Service</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Date/Time</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: 'John Doe', service: 'Acne Treatment', date: 'Oct 24, 10:00 AM', status: 'Pending' },
                        { name: 'Alice Smith', service: 'Hair Transplant Checkup', date: 'Oct 24, 11:30 AM', status: 'Approved' },
                        { name: 'Robert Johnson', service: 'Laser Hair Removal', date: 'Oct 25, 02:00 PM', status: 'Pending' },
                        { name: 'Emily Davis', service: 'Skin Biopsy', date: 'Oct 25, 04:00 PM', status: 'Cancelled' },
                      ].map((apt, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-medium text-gray-900">{apt.name}</td>
                          <td className="py-4 px-4 text-sm text-gray-600">{apt.service}</td>
                          <td className="py-4 px-4 text-sm text-gray-600">{apt.date}</td>
                          <td className="py-4 px-4 text-sm">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                              ${apt.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                                apt.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                                'bg-red-100 text-red-700'}`
                            }>
                              {apt.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            {apt.status === 'Pending' ? (
                              <div className="flex justify-end gap-2">
                                <button className="p-1.5 text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition" title="Approve">
                                  <CheckCircle className="w-5 h-5"/>
                                </button>
                                <button className="p-1.5 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition" title="Cancel">
                                  <XCircle className="w-5 h-5"/>
                                </button>
                              </div>
                            ) : (
                               <span className="text-gray-400 text-xs">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
           )}

           {/* PATIENTS TAB */}
           {activeTab === 'patients' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-[#c5a47e] pl-4">Patient Directory</h2>
                  <div className="relative">
                    <input type="text" placeholder="Search patients..." className="pl-4 pr-10 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a47e]/50" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50/50">
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 rounded-tl-xl">Patient Info</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Contact</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600">Last Visit</th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-600 rounded-tr-xl">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {[
                         { name: 'John Doe', email: 'john@example.com', phone: '+1 555-0102', lastVisit: '2 days ago' },
                         { name: 'Alice Smith', email: 'alice@example.com', phone: '+1 555-8931', lastVisit: '1 week ago' },
                         { name: 'Robert Johnson', email: 'robert@example.com', phone: '+1 555-2245', lastVisit: '2 months ago' },
                         { name: 'Emily Davis', email: 'emily@example.com', phone: '+1 555-9011', lastVisit: 'Yesterday' },
                         { name: 'Michael Brown', email: 'michael@example.com', phone: '+1 555-3321', lastVisit: '6 months ago' },
                       ].map((p, i) => (
                         <tr key={i} className="hover:bg-gray-50 transition-colors">
                           <td className="py-4 px-4">
                             <div className="flex items-center gap-3">
                               <div className="h-10 w-10 rounded-full bg-[#c5a47e]/10 text-[#c5a47e] flex items-center justify-center font-bold">
                                 {p.name.charAt(0)}
                               </div>
                               <div>
                                 <p className="font-semibold text-gray-900 leading-none">{p.name}</p>
                                 <p className="text-xs text-gray-500 mt-1">ID: PAT-{1000 + i}</p>
                               </div>
                             </div>
                           </td>
                           <td className="py-4 px-4">
                             <div className="text-sm text-gray-900">{p.email}</div>
                             <div className="text-xs text-gray-500 mt-1">{p.phone}</div>
                           </td>
                           <td className="py-4 px-4 text-sm text-gray-600">{p.lastVisit}</td>
                           <td className="py-4 px-4">
                             <button className="text-sm font-medium text-[#c5a47e] hover:text-[#b08d66]">View Profile</button>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}