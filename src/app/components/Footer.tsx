import React from "react";
import { FafacebookF } from "react icons/fa";
const Footer = () => {
    return (
        <div>
          <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
             <div>
              <h3 className='text-xl font-bold mb-4'>Core Courses</h3>
              <ul className='space-y-2 text-lg'>
                <li>Programing Fundamentals</li>
                <li>Web2 UsingNextJs</li>
                <li>Earn as You Learn</li>
              </ul>
             </div>
             <div>

              <h3 className='text-xl font-bold mb-4'>Advanced Courses</h3>
              <ul className='space-y-2 text-lg'>
                   <li>Web 3and Metaverses</li>
                   <li>Cloud-Native Computing</li>
                   <li>Artificial Intelligence (AI) and Deep Learning</li>
                   <li>Ambient Computing and IoT</li>
                   <li>Genomics and Bioinformatics</li>
                   <li>Network Programability and Automation</li>
              </ul>
             </div>
             <div>
              <h3 className='text xl- font-bold mb-4'> Social Links</h3>
              <div className='flex space-x mb-4'>
            

              </div>
             </div>
            </div>

          </footer>
        </div>
    )
}

export default Footer