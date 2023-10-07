import { useFormik } from "formik";
import Input from "./components/input";
import { Link } from "react-router-dom";
// import { error } from "console";
import "./App.css";
import profile from "./assets/profile.jpg";
import { SubmitButton } from "./components/button/styledButton";
import registerSchema from "./helper/registerValidation";

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      family: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: registerSchema,
  });
  return (
    <div
      className="login"
      style={{
        direction: "rtl",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={profile} alt="profile" />
      <form onSubmit={formik.handleSubmit} className="form">
        <h2>خوش آمدید</h2>
        <h4>برای ثبت نام فرم زیر را با دقت پر کنید</h4>
        <Input
          autoComplete="off"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          //lable="آدرس ایمیل"
          placeholder="ایمیل خود را وارد کنید"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          }
          error={formik.errors["username"]}
        />
        <Input
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          //lable="نام"
          placeholder="نام"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          error={formik.errors["name"]}
        />
        <Input
          autoComplete="off"
          value={formik.values.family}
          onChange={formik.handleChange}
          name="family"
          //lable="نام خانوادگی"
          placeholder="نام خانوادگی"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          error={formik.errors["family"]}
        />
        <Input
          autoComplete="off"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          //lable="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید"
          type="password"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
          error={formik.errors["password"]}
        />
        <Input
          autoComplete="off"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          name="confirm_password"
          //lable="تکرار رمز عبور"
          placeholder="تکرار رمز عبور"
          type="password"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
          error={formik.errors["confirm_password"]}
        />
        <Link style={{ fontSize: "6px" }} to={"/login"}>
          قبلا ثبت نام کرده اید ؟ ورود
        </Link>
        <SubmitButton>
          <span>ثبت نام</span>
        </SubmitButton>
      </form>
    </div>
  );
}

export default App;
