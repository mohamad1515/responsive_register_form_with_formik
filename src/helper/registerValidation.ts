import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .email("ایمیل خود را به صورت صحیح وارد کنید")
    .required("ایمیل خود را وارد کنید"),
  password: yup
    .string()
    .min(8, "مقدار رمز عبور شما کوتاه میباشد و باید بیشتر از 8 کاراکتر باشد")
    .max(20, "مقدار رمز عبور شما طولانی میباشد و باید کمتر از 20 کاراکتر باشد")
    .matches(
      /^[a-zA-Z0-9_.-]*$/,
      "رمز عبور باید از حروف بزرگ و کوچک تشکیل شده باشد"
    )
    .required(" عبور خود را وارد کنید"),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("password"), undefined],
      "رمز عبور شما با یکدیگر یکسان نیست"
    ),
  name: yup.string().required("نام خود را وارد کنید"),
  family: yup.string().required("نام خانوادگی خود را وارد کنید"),
});

export default registerSchema;
