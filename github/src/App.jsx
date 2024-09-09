import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

function App() {
  const [detail, setDetail] = useState({});
  const [list, setList] = useState([]);
  const [subject, setSubject] = useState("");
  const [sublist, setsubList] = useState([]);

  return (
    <>
      <div className='container flex justify-center items-center flex-row'>
        <div className=' w-[400px] h-[650px] flex flex-col p-4 mt-16 bg-white rounded-lg shadow-2xl'>
          <label className='text-md p-2'> First Name </label>
          <input
            name='firstName'
            className='rounded-md outline-none p-1 border bottom-1'
            onChange={(e) =>
              setDetail({ ...detail, firstname: e.target.value })
            }
            placeholder='First Name'
          />
          <label className='text-md p-2'> Last Name </label>
          <input
            className='rounded-md outline-none p-1 border bottom-1'
            onChange={(e) => setDetail({ ...detail, lastname: e.target.value })}
            placeholder='Last Name'
          />
          <label className='text-md p-2'>Student email </label>
          <input
            className='rounded-md outline-none p-1 border bottom-1'
            onChange={(e) => setDetail({ ...detail, email: e.target.value })}
            placeholder='Student email'
          />
          <label className='text-md p-2'>Phone Number </label>
          <input
            className='rounded-md outline-none p-1 border bottom-1'
            onChange={(e) => setDetail({ ...detail, number: e.target.value })}
            placeholder='Phone Number'
          />
          <div className='flex justify-between mt-4 '>
            <select
              onChange={(e) => setDetail({ ...detail, gender: e.target.value })}
            >
              <option>Select Gender</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <label className='text-md p-2'>Address </label>
          <input
            className='rounded-md outline-none p-1 border bottom-1 '
            onChange={(e) => setDetail({ ...detail, adress: e.target.value })}
            placeholder='Address'
          />
          <label className='text-md p-2'>Class </label>
          <input
            className='rounded-md outline-none p-1 border bottom-1'
            onChange={(e) => setDetail({ ...detail, clas: e.target.value })}
            placeholder='Class'
          />
          <div  className='flex flex-col'>
            <label className='text-md p-2 '> Subject</label>
            <input
              className='rounded-md outline-none p-1 border bottom-1'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Subject'
            />
            <button
              className='w-5/12 bg-[#4CBFD9] text-white text-md font-semibold p-1 rounded-xl mt-2'
              onClick={() => {
                setsubList([...sublist, subject]);
                setSubject("");
              }}
            >
              Add Subject
            </button>

            {sublist.map((i, n) => (
              <ul className='flex justify-between' key={n}>
                <div>
                  <li className='p-1 w-72'>
                    {n + 1}. {i}
                  </li>
                </div>
                <button
                  onClick={() => setsubList(sublist.filter((_, b) => b !== n))}
                >
                  <RxCross2 />
                </button>
              </ul>
            ))}
          </div>

          <div className='flex justify-center p-4'>
            <button
              onClick={() => {
                setList([...list, { ...detail, subjects: sublist }]);
                setsubList([]);
              }}
              className='w-full bg-[#4CBFD9] text-white text-md font-semibold p-1 rounded-xl'
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Subjects</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {list.map((i, n) => (
            <tr key={n}>
              <td>{n + 1}.</td>
              <td>{i.firstname}</td>
              <td>{i.lastname}</td>
              <td>{i.email}</td>
              <td>{i.number}</td>
              <td>{i.gender}</td>
              <td>{i.clas}</td>
              <td>{i.subjects.join(", ")}</td>
              <td>{i.adress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
