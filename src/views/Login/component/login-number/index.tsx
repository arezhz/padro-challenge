import { Formik } from "formik";
import {
  DescriptionText,
  LoginFormLayout,
  MainText,
  SignupRow,
  SignupRowLink,
  SignupRowText,
  SubmitButton,
} from "../../styles";
import { InputText } from "primereact/inputtext";
import { FromError } from "../../../../kits/form";
import PhoneNumber from "../../../../stores/actions/phone-number";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
export default function LoginNumber() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <MainText>به پنل مدیریت تسک پادرو خوش آمدید</MainText>
      <DescriptionText>
        برای ورود، لطفا شماره موبایل خود را وارد کنید
      </DescriptionText>
      <LoginFormLayout>
        <Formik
          initialValues={{ phoneNumber: "" }}
          validate={(values) => {
            const phoneNumberRegex =
              /^09(0[1-5]|1[0-9]|3[0-9]|2[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}/;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errors: any = {};
            if (!values.phoneNumber) {
              errors.phoneNumber = "شماره تلفن همراه الزامی است.";
            } else if (
              !phoneNumberRegex.test(values.phoneNumber) ||
              values.phoneNumber.length > 11
            ) {
              errors.phoneNumber = "شماره تلفن همراه صحیح نیست.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(PhoneNumber(values.phoneNumber));
            navigate('verification')
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <InputText
                type="text"
                name="phoneNumber"
                placeholder="شماره موبایل"
                value={values.phoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={!!(errors.phoneNumber && touched.phoneNumber)}
              />
              <FromError>
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </FromError>
              <SubmitButton
                type="submit"
                label="ارسال کد‌ تایید"
                disabled={!isValid || isSubmitting}
              />
            </form>
          )}
        </Formik>
      </LoginFormLayout>
      <SignupRow>
        <SignupRowText>حساب کاربری ندارید؟</SignupRowText>
        <SignupRowLink to={"login"}>ثبت نام</SignupRowLink>
      </SignupRow>
    </>
  );
}
