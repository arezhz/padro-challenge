import { Formik } from "formik";
import {
  LoginFormLayout,
  LoginTextWrapper,
  SignupRow,
  SignupRowText,
  SubmitButton,
} from "../../styles";
import { InputText } from "primereact/inputtext";
import { FromError } from "../../../../kits/form";
import PhoneNumber from "../../../../stores/actions/phone-number";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ILoginPropsDto } from "../../models/i-login-props.dto";
import { LinkNavigate, TextBox } from "../../../../kits/shared";
function LoginNumber({ phoneNumber }: ILoginPropsDto) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <LoginTextWrapper>
        <TextBox $size="1rem" $color="var(--login-main-text)">
          به پنل مدیریت تسک پادرو خوش آمدید
        </TextBox>
        <TextBox $size="0.875rem" $color="var(--login-description-text)">
          برای ورود، لطفا شماره موبایل خود را وارد کنید
        </TextBox>
      </LoginTextWrapper>
      <LoginFormLayout>
        <Formik
          initialValues={{ phoneNumber: phoneNumber || "" }}
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
            navigate("verification");
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
        <LinkNavigate to={"login"}>ثبت نام</LinkNavigate>
      </SignupRow>
    </>
  );
}
function mapStateToProps(state: any) {
  const { Login } = state;
  return { phoneNumber: Login };
}

export default connect(mapStateToProps)(LoginNumber);
