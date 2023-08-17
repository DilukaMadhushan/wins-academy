//import './App.css';
import './FeedbackNC.css';

import AllInstructor from './components/AllInstructor';
import EditInstructor from './components/EditInstructor';
import InstructorDetails from './components/InstructorDetails';
import GenerateReport from './components/GenerateReport';
import AllRequest from './components/AllRequest';
import EditLecturer from './components/EditLecturer';
import CreateInstructor from './components/CreateInstructor';
import ViewQuiz from './components/QuizViewAll';
import QuizAdd from './components/QuizAdd';
import QuizUpdate from './components/QuizUpdate';
import ViewAssignment from './components/AssignmentView'
import AssignmentAdd from './components/AssignmentAdd';

import Feedbackform from './components/Feedbackform';
import View from './components/Notice';
import ViewAdmin from './components/AdminNoticeView';
import FeedbackView from './components/FeedbackView';
import NoticeUpload from './components/NoticeUpload';
import AdminContactView from './components/AdminContactView';
import NoticeUpdate from './components/NoticeUpdate';
import InsertContactus from './components/InsertContactus';



import Header from './shared/Header';
import HeaderStudent from './StudentDashboard/HeaderStudent'
import Footer from './shared/Footer';


import { BrowserRouter as Router, Route } from "react-router-dom"
import ExampleFeedback from './components/FedbackReport';
import Alllectureres from './components/Alllectureres';
import CreateLectures from './components/CreateLectures';
import RequestsLecturer from './components/RequestsLecturer';
import LectureDetails from './components/LectureDetails';
import Lecturereportgen from './components/Lecturereportgen';
import CreateStudent from './components/CreateStudent';
import AllStudents from './components/AllStudents';
import StudentReportGen from './components/StudentReportGen';
import RequestStudent from './components/RequestStudent';
import EditStudent from './components/EditStudent';
import SendImportantMessages from './components/SendImportantMessages';
import LoginAdmin from './Auth/LoginAdmin';
import { useEffect } from 'react';
import Logout from './Auth/Logout';
import ReferencesStudent from './studentcomponents/References';
import CreateResouces from './studentcomponents/CreateResource';
import ViewImportantMessages from './studentcomponents/ViewImportantMessages';
import Profile from './studentcomponents/Profile';

function App() {
  const isloggedin = () => {
    let isloggedinggg = localStorage.getItem("isloggedin")
    console.log(isloggedinggg)
    if (isloggedinggg === null) {
      if (!window.location.href.includes("login")) {
        window.location.href = "/login"
      }
    }
  }
  useEffect(() => {
    isloggedin()
  }, [window.location.href])

  return (
    <Router>
      <Route path="/" exact component={null}>
        <Route path="/" exact component={Logout} />

      </Route>
      <Route path="/logout" component={null}>
        <Route path="/*" exact component={Logout} />

      </Route>
      <Route path="/login" component={null}>
        <Route path="/*" exact component={LoginAdmin} />
      </Route>
      <Route path="/dashboard" component={null}>
        <div style={{ backgroundImage: "url(/bckground.png)", height: "100vh", overflowY: "scroll" }}>
          <Header />

          {/* <Route path="/" exact component={CounterClass} /> */}

          <Route path="/" exact component={AllInstructor} />


          <Route path="/dashboard/edit/:id" exact component={EditInstructor} />
          <Route path="/dashboard/instructor/:id" exact component={InstructorDetails} />
          <Route path="/dashboard/reportgenerate" exact component={GenerateReport} />
          <Route path="/dashboard/request" exact component={AllRequest} />
          <Route path="/dashboard/editrequest/:id" exact component={EditInstructor} />
          <Route path="/dashboard/instructor-register" exact component={CreateInstructor} />

          <Route path="/dashboard/i/quiz" exact component={ViewQuiz} />
          <Route path="/dashboard/i/quizadd" exact component={QuizAdd} />
          <Route path="/dashboard/i/quizupdate/:id" component={QuizUpdate} exact></Route>
          <Route path="/dashboard/i/assignment" exact component={ViewAssignment} />
          <Route path="/dashboard/i/assignmentadd" exact component={AssignmentAdd} />


          <Route path="/dashboard/add" exact component={InsertContactus} />
          <Route path="/dashboard/view" exact component={AdminContactView} />
          <Route path="/dashboard/fbview" exact component={FeedbackView} />
          <Route path="/dashboard/fbadd" exact component={Feedbackform} />
          <Route path="/dashboard/feedadd" exact component={NoticeUpload} />
          <Route path="/dashboard/feeddelete/:id" exact component={ViewAdmin} />
          <Route path="/dashboard/feedview" exact component={View} />
          <Route path="/dashboard/feedAdminview" exact component={ViewAdmin} />
          <Route path="/dashboard/feedupdate/:id" exact component={NoticeUpdate} />

          <Route path="/dashboard/lecturers" exact component={Alllectureres} />
          <Route path="/dashboard/lecturer-register" exact component={CreateLectures} />
          <Route path="/dashboard/lecturer-requests" exact component={RequestsLecturer} />
          <Route path="/dashboard/editlecture/:id" exact component={EditLecturer} />
          <Route path="/dashboard/lecturer/:id" exact component={LectureDetails} />
          <Route path="/dashboard/reportgenerate-lecture" exact component={Lecturereportgen} />


          <Route path="/dashboard/students-register" exact component={CreateStudent} />
          <Route path="/dashboard/students" exact component={AllStudents} />
          <Route path="/dashboard/reportgenerate-student" exact component={StudentReportGen} />
          <Route path="/dashboard/students-requests" exact component={RequestStudent} />
          <Route path="/dashboard/edit-student/:id" exact component={EditStudent} />

          <Route path="/dashboard/instant-messages" exact component={SendImportantMessages} />

          <Route path="/dashboard/resources" exact component={ReferencesStudent} />
          <Route path="/dashboard/create-resources" exact component={CreateResouces} />
          <Route path="/dashboard/instructors" exact component={AllInstructor} />
          <Route path="/dashboard/printview" exact component={ExampleFeedback} />
        </div >
        <Footer />
      </Route>

      <Route path="/student" component={null}>
        <div style={{ backgroundImage: "url(/bckground.png)", height: "100vh", overflowY: "scroll" }}>
          <HeaderStudent />
          <Route path="/student/important-messages" exact component={ViewImportantMessages} />
          <Route path="/student/resources" exact component={ReferencesStudent} />
          <Route path="/student/my-profile" exact component={Profile} />

        </div>
      </Route>
    </Router>
  );
}

export default App;