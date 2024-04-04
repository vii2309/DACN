import vest, { test, enforce,create } from "vest";

// @ts-ignore
import isEmail from "validator/lib/isEmail";

enforce.extend({ isEmail });

export const loginValidator = create((data = {}) => {
    test("email", 'Email không hợp lệ', () => {
        enforce(data.email).isEmail();
    });
    test("email", 'Email không được để trống', () => {
        enforce(data.email).isNotEmpty();
    });
    test("password", 'Mật khẩu không được để trống', () => {
        enforce(data.password).isNotEmpty();
    });
    test("password", 'Mật khẩu không thể ngắn hơn 6 ký tự và dài hơn 20 ký tự.', () => {
        enforce(data.password).longerThanOrEquals(6).shorterThanOrEquals(20);
    });
});

export const timelineValidator = create((data = {})=> {

    test("title", 'Tiêu đề tiến trình không được để trống.', () => {
        enforce(data.title).isNotEmpty();
    })

    test("start_date", 'Thời gian bắt đầu tiến trình không hợp lệ.', () => {

        const startdate = new Date(data?.start_date)
        const enddate = new Date(data?.end_date)
        enforce(startdate < enddate).isTruthy();
    })
})
