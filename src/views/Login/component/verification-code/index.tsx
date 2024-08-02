import { connect } from "react-redux";
import {
  LoginTextWrapper,
  ResendButton,
  ResendWrapper,
  SubmitButton,
} from "../../styles";
import { ILoginPropsDto } from "../../models/i-login-props.dto";
import { LinkNavigate, TextBox } from "../../../../kits/shared";
import { useCallback, useEffect, useRef, useState } from "react";
import { InputOtp } from "primereact/inputotp";
import CountDownTimer from "../../../../utils/services/countdown-time.service";
import { useNavigate } from "react-router-dom";

function VerificationCode({ phoneNumber }: ILoginPropsDto) {
  const [verifyCode, setVerifyCode] = useState<string>();
  const [timerState, setTimerState] = useState<boolean>(false);
  const [showTime, setShowTime] = useState<string>("");
  const navigate = useNavigate();
  // when we get the countdown time from backend , we can remove the next line and set seconds from useEffect
  const countdownSec = 120;
  let interval: any = null;
  let seconds = useRef<number>(0);

  const resendCode = () => {
    if (!timerState) {
      seconds.current = countdownSec;
      timerInterval();
    }
  };


  const stopCountdown = () => {
    clearInterval(interval);
    setTimerState(false);
  };

  const timerInterval = useCallback(() => {
    setTimerState(true);
    interval = setInterval(() => {
      seconds.current = seconds.current - 1;
      const res = CountDownTimer(seconds.current);
      setShowTime(res);
      if (seconds.current <= 0) {
        stopCountdown();
      }
    }, 1000);
  }, [seconds, showTime]);

  useEffect(() => {
    if(!phoneNumber) {
      navigate('/login')
    }
    seconds.current = countdownSec;
    timerInterval();
    return () => {
      stopCountdown();
    };
  }, []);

  return (
    <>
      <LoginTextWrapper>
        <TextBox $size="1rem" $color="var(--login-main-text)">
          کد تایید را وارد کنید
        </TextBox>
        <TextBox $size="0.875rem" $color="var(--login-description-text)">
          کد تایید برای شماره {phoneNumber} پیامک شد
        </TextBox>
        <LinkNavigate to="/login">تغییر شماره همراه</LinkNavigate>
      </LoginTextWrapper>

      <InputOtp
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.value as string)}
        style={{ marginTop: "2rem", direction: "ltr" }}
      />
      <ResendWrapper>
        <TextBox $size="0.875rem" $color="var(--login-main-text)">
          کد را دریافت نکردید؟
        </TextBox>
        <ResendButton onClick={() => resendCode()} disabled={timerState}>
          ارسال مجدد
        </ResendButton>
      </ResendWrapper>
      <SubmitButton
        type="submit"
        label={
          verifyCode && verifyCode.length === 4 && timerState
            ? "تایید"
            : showTime
        }
        disabled={!verifyCode || verifyCode?.length < 4 || !timerState}
      />
    </>
  );
}

function mapStateToProps(state: any) {
  const { Login } = state;
  return { phoneNumber: Login };
}

export default connect(mapStateToProps)(VerificationCode);
