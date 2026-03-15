import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from "lucide-react";
import "./BatchScheduling.css";

const SCHEDULE = [
  { id: 1, day: "Monday", slots: [
    { time: "10:00 AM - 12:00 PM", batch: "Batch-01", topic: "React Hooks & Context API", type: "Live Session", color: "#38bdf8" },
    { time: "02:00 PM - 04:00 PM", batch: "Batch-02", topic: "Node.js Middleware", type: "Workshop", color: "#10b981" }
  ]},
  { id: 2, day: "Tuesday", slots: [
    { time: "11:00 AM - 01:00 PM", batch: "Batch-01", topic: "State Management Redux", type: "Live Session", color: "#38bdf8" }
  ]},
  { id: 3, day: "Wednesday", slots: [
    { time: "10:00 AM - 12:00 PM", batch: "Batch-02", topic: "Database Schema Design", type: "Theory", color: "#f59e0b" },
    { time: "03:00 PM - 05:00 PM", batch: "Batch-01", topic: "Portfolio Review", type: "Mentorship", color: "#818cf8" }
  ]},
  { id: 4, day: "Thursday", slots: [
    { time: "02:00 PM - 04:00 PM", batch: "Batch-02", topic: "Authentication JWT", type: "Live Session", color: "#10b981" }
  ]},
  { id: 5, day: "Friday", slots: [
    { time: "10:00 AM - 12:00 PM", batch: "Batch-01", topic: "Final Project Kickoff", type: "Live Session", color: "#38bdf8" },
    { time: "02:00 PM - 04:00 PM", batch: "Batch-02", topic: "Q&A System Design", type: "Office Hours", color: "#e879f9" }
  ]}
];

const BatchScheduling = () => {
  return (
    <div className="schedule-container">
      <div className="section-header">
        <div>
          <h2 className="gradient-text">Batch Schedule</h2>
          <p>Manage your weekly teaching sessions and batch availability.</p>
        </div>
        <div className="header-actions">
           <div className="date-selector glass">
              <button className="icon-btn-mini"><ChevronLeft size={18} /></button>
              <span>March 09 - March 15, 2026</span>
              <button className="icon-btn-mini"><ChevronRight size={18} /></button>
           </div>
           <button className="btn-primary mini-btn">
              <Plus size={18} />
              <span>Add Event</span>
           </button>
        </div>
      </div>

      <div className="timetable-wrap card glass">
        <div className="timetable-grid">
           {SCHEDULE.map((day, idx) => (
             <div key={day.id} className="day-column">
                <div className="day-header">
                   <span className="day-name">{day.day}</span>
                   <span className="day-date">{idx + 9} Mar</span>
                </div>
                <div className="slots-list">
                   {day.slots.map((slot, sIdx) => (
                     <motion.div 
                        key={sIdx} 
                        className="slot-card"
                        style={{ borderLeft: `4px solid ${slot.color}` }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                     >
                        <div className="slot-time">
                           <Clock size={12} />
                           <span>{slot.time.split(' - ')[0]}</span>
                        </div>
                        <h4 className="slot-topic">{slot.topic}</h4>
                        <div className="slot-batch">
                           <Users size={12} />
                           <span>{slot.batch}</span>
                        </div>
                        <div className="slot-type-chip" style={{ background: `${slot.color}15`, color: slot.color }}>
                           {slot.type}
                        </div>
                     </motion.div>
                   ))}
                   {day.slots.length === 0 && (
                     <div className="slot-card empty">
                        <span className="text-secondary">No classes</span>
                     </div>
                   )}
                </div>
             </div>
           ))}
        </div>
      </div>

      <div className="upcoming-reminders mt-8">
         <h3 className="mb-4">Quick Reminders</h3>
         <div className="reminders-grid">
            <div className="reminder-item card glass border-l-4 border-l-red-500">
               <h4>Batch-01 Feedback Due</h4>
               <p>Provide weekly feedback for React module by tomorrow.</p>
            </div>
            <div className="reminder-item card glass border-l-4 border-l-yellow-500">
               <h4>New Project Assignment</h4>
               <p>Draft the E-commerce project specs for Batch-02.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BatchScheduling;
