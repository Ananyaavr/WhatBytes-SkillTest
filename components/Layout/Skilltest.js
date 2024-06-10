"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from './Modal';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SkillTest = () => {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = () => {
    setIsUpdate(true);
  };

  const handleSave = () => {
    setIsUpdate(false);
  };

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#FF1654'],
    series: [
      {
        name: 'Percentile',
        data: [percentile], // This will be updated dynamically
      },
    ],
    stroke: {
      width: [4],
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    xaxis: {
      categories: ['2021'], // Placeholder for categories, adjust as needed
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FF1654',
        },
        labels: {
          style: {
            colors: '#FF1654',
          },
        },
        title: {
          text: 'Percentile',
          style: {
            color: '#FF1654',
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div className="flex-1 p-4 lg:p-8">
          <div className="space-y-8">
            {/* Skill Set Box */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-4">Skill Set</h3>
                  <p className="text-black">Hypertext Markup Language</p>
                  <p className="text-black">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
                <button onClick={handleUpdate} className="btn btn-primary">Update</button>
              </div>
            </div>

            {/* Quick Statistics Box */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold mb-4">Quick Statistics</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="stat-title">Rank</div>
                  <div className="stat-value">{rank}</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                  </div>
                  <div className="stat-title">Percentile</div>
                  <div className="stat-value">{percentile}</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <div className="stat-title">Score</div>
                  <div className="stat-value">{score}</div>
                </div>
              </div>
            </div>

            {/* Comparison Graph Box */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold mb-4">Comparison Graph</h3>
              <div className="p-4 border border-gray-200 rounded-lg h-80 bg-white">
                <Chart options={chartOptions} series={[{ name: 'Percentile', data: [percentile] }]} type="line" height={350} />
              </div>
            </div>

            {/* Syllabus Wise Analysis Box */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h3>
              <ul>
                <li>HTML Tools, Forms, History - Intermediate</li>
                <li>Tags and References - Beginner</li>
                <li>Tables - Expert</li>
                <li>Tables and CSS - Intermediate</li>
              </ul>
            </div>

            {/* Question Analysis Box */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold mb-4">Question Analysis</h3>
              <p className="text-black">Score: {score} out of 15</p>
              {score === 15 ? (
                <p className="text-black">You scored 15 out of 15. Hurray, congratulations!</p>
              ) : (
                <p className="text-black">You scored {score} questions correct out of 15. However, it still needs improvements.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isUpdate && (
        <Modal  isOpen={isUpdate} onClose={() => setIsUpdate(false)}>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Update</h4>
            <label className="text-black">
              Update your rank:
              <input type="number" value={rank} onChange={(e) => setRank(Number(e.target.value))} className="border p-1 ml-2 text-black" />
            </label>
            <br />
            <label className="text-black">
              Update your percentile:
              <input type="number" value={percentile} onChange={(e) => setPercentile(Number(e.target.value))} className="border p-1 ml-2 text-black" />
            </label>
            <br />
            <label className="text-black">
              Update your current score (out of 15):
              <input type="number" value={score} onChange={(e) => setScore(Number(e.target.value))} className="border p-1 ml-2 text-black" />
            </label>
            <br />
            <button onClick={handleSave} className="mt-4 bg-green-500 text-white px-4 py-2">Save</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SkillTest;
