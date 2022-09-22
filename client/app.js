import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [chapelList, setchapelList] = useState(null);
  const [timetableList, settimetableList] = useState(null);
  const [loginList, setloginList] = useState(null);

  const fetchData_chapel = () => {
    fetch('http://localhost:4000/api/chapel')
        .then((response) => response.json())
        // .then((data)=> console.log(data)); //콘솔에 찍기
        .then((data)=> setchapelList(data));
    };

  const fetchData_timetable = () => {
    fetch('http://localhost:4000/api/timetable')
        .then((response) => response.json())
        // .then((data)=> console.log(data)); //콘솔에 찍기
        .then((data)=> settimetableList(data));
    };

  const fetchData_login = () => {
    fetch('http://localhost:4000/api/login')
        .then((response) => response.json())
        // .then((data)=> console.log(data)); //콘솔에 찍기
        .then((data)=> setloginList(data));
    };


  useEffect(()=>{ fetchData_chapel() }, []);
  useEffect(()=>{ fetchData_timetable() }, []);
  useEffect(()=>{ fetchData_login() }, []);


  
//1. 로그인 통신
  const onSubmitHandler_login = (e) =>{
    
    const state = e.target.state.value;
    const message = e.target.message.value;
    const data = e.target.data.checked;
    const id = document.getElementById("id").value;

    fetch('http://localhost:4000/api/login', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        state,
        message,
        data,
      }),
    }).then(()=>
    fetch('http://localhost:4000/api/login')
        .then((response) => response.json())
        .then((data)=>{
          document.getElementById("id").innerHTML = data['time']
        })
        .then((data)=> setloginList(data))
    )
  }

  'http://15.165.194.15:8080/timetables?id=20211563&pwd=kweonsk0901!'
  // // const onSubmitHandler = (e) => {
  // //   e.preventDefault();
  // //   // const id = document.getElementById("id").value;
  // //   // const pwd = document.getElementById("pwd").value;

  // //   const time = e.target.time.value;
  // //   const seatNumber = e.target.seatNumber.value;
  // //   const absences = e.target.absences.value;

  // //   // fetch('http://15.165.194.15:8080/chapel?id=' + id +'&pwd=' + pwd, {
  // //   //   method: 'POST',
  // //   //   headers: {
  // //   //     'Content-Type' : 'application/json',
  // //   //   },
  // //   //   body: JSON.stringify({
  // //   //     time,
  // //   //     seatNumber,
  // //   //     absences,
  // //   //   }),
  // //   // })
  // //   // .then((response) => response.json())///
  // //   // .then((data) => {
  // //   //   document.getElementById("time").innerHTML = data['time']
  // //   //   document.getElementById("seatNumber").innerHTML = data['seatNumber']
  // //   //   document.getElementById("absences").innerHTML = data['absences']
  // //   // })

  //   //chapel request 
  //   fetch('http://localhost:4000/api/chapel', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json',
  //     },
  //     body: JSON.stringify({
  //       time,
  //       seatNumber,
  //       absences,
  //     }),
  //   }).then(()=>
  //   fetch('http://localhost:4000/api/chapel')
  //       .then((response) => response.json())
  //       .then((data)=> setchapelList(data))
  //   )

  //   //timetable request
  //   fetch('http://localhost:4000/api/timetable', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type' : 'application/json',
  //     },
  //     body: JSON.stringify({
  //       time,
  //       seatNumber,
  //       absences,
  //     }),
  //   }).then(()=>
  //   fetch('http://localhost:4000/api/timetable')
  //       .then((response) => response.json())
  //       .then((data)=> settimetableList(data))
  //   )

  // // };

  return (
    <div className="App">
      <h1>Login</h1>

      <form onSubmit={onSubmitHandler_login}>
        <input name='id' id='id' type='text'/>
        <input name='pwd' id='pwd' type='password' />
        <input name='login' id='login_btn' type='submit' value='login' />
      </form>


      {/* login list */}
      {loginList?.map((login) => (
        <div key={login.id} >
          <div>{login.id}</div>
          <div>{login.state}</div>
          <div>{login.message}</div>
          <div>{login.injang}</div>
        </div>
      ))}


      {/* <p id='time'></p>
      <p id='seatNumber'></p>
      <p id='absences'></p> */}
      
      {/* chapel list */}
      <h1>chapel LIST</h1>
      {/* <form onSubmit={onSubmitHandler}>

      </form> */}

      {chapelList?.map((chapel) => (
        <div key={chapel.id} >
          <div>{chapel.id}</div>
          <div>{chapel.time}</div>
          <div>{chapel.seatNumber}</div>
          <div>{chapel.absences}</div>
        </div>
      ))}
      
      {/* timetable list */}
      <h1>timetable LIST</h1>
      {/* <form onSubmit={onSubmitHandler}>

      </form> */}

      {timetableList?.map((timetable) => (
        <div key={timetable.id} >
          <div>{timetable.category}</div>
          <div>{timetable.subjectArea}</div>
          <div>{timetable.subjectID}</div>
          <div>{timetable.subjectName}</div>
          <div>{timetable.credit}</div>
        </div>
      ))}
    </div>

        
  );
}

export default App;
