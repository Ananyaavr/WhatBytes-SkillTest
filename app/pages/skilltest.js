"use client";
import { useState } from 'react';
// import Sidebar from '../components/Sidebar';

const SkillTest = () => {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const handleSave = () => {
    setIsUpdate(false);
  };

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow">
            <h3 className="text-xl font-bold mb-4">Skill Set</h3>
            <p>Hypertext Markup Language</p>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            <button onClick={handleUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2">Update</button>
            {isUpdate && (
              <div className="mt-4">
                <h4 className="font-bold mb-2">Update</h4>
                <label>
                  Update your rank:
                  <input type="number" value={rank} onChange={(e) => setRank(e.target.value)} className="border p-1 ml-2" />
                </label>
                <br />
                <label>
                  Update your percentile:
                  <input type="number" value={percentile} onChange={(e) => setPercentile(e.target.value)} className="border p-1 ml-2" />
                </label>
                <br />
                <label>
                  Update your current score (out of 15):
                  <input type="number" value={score} onChange={(e) => setScore(e.target.value)} className="border p-1 ml-2" />
                </label>
                <br />
                <button onClick={handleSave} className="mt-4 bg-green-500 text-white px-4 py-2">Save</button>
              </div>
            )}
          </div>
          <div className="bg-white p-4 shadow">
            <h3 className="text-xl font-bold mb-4">Quick Statistics</h3>
            <p>Rank: {rank}</p>
            <p>Percentile: {percentile}</p>
            <p>Score: {score}</p>
          </div>
          <div className="bg-white p-4 shadow">
            <h3 className="text-xl font-bold mb-4">Comparison Graph</h3>
            <p>Graph displaying percentile data ranging from 0 to 100</p>
            {/* Insert graph component here */}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="bg-white p-4 shadow">
            <h3 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h3>
            <ul>
              <li>HTML Tools, Forms, History - Intermediate</li>
              <li>Tags and References - Beginner</li>
              <li>Tables - Expert</li>
              <li>Tables and CSS - Intermediate</li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow">
            <h3 className="text-xl font-bold mb-4">Question Analysis</h3>
            <p>Score: {score} out of 15</p>
            {score === 15 ? (
              <p>You scored 15 out of 15. Hurray, congratulations!</p>
            ) : (
              <p>You scored {score} questions correct out of 15. However, it still needs improvements.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
