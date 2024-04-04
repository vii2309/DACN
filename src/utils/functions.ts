import axios from 'axios';
import moment from 'moment';
import { Buffer } from 'buffer';
import { API_AUTH_URL, CLOUD_STORAGE_URL } from '@/libs/constants';
import hashMd5 from "md5";
import queryString from "query-string"

export const md5 = hashMd5


export const encodeBase64 = (string = '') => {
  return Buffer.from(string).toString('base64');
};

const queryStringFormats = {
    skipNull: true,
    arrayFormat: "bracket",
    skipEmptyString: true
};

export const queryStringParse = (queries: string) => queryString.parse(
    queries,
    {
        arrayFormat:"bracket"
    }
    // queryStringFormats
);

export const simpleRequest = (url: string, data = {}, method: any = 'GET', headers = {}, options = {}) => {
    return axios({
        method: method,
        url: url,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...headers
        },
        ...options,
        data: data,
    });
}

const refreshToken = async () => {
    return await simpleRequest(`${API_AUTH_URL}/auth/v2/refresh_token`, {}, 'GET', {}, { withCredentials: true })
        .then(({ data }) => {
            if (data.errors) return undefined;

            const { access_token: accessToken, exp } = data.data;

            localStorage.setItem('SA', accessToken);
            localStorage.setItem('EXP', exp);

            return accessToken;
        })
        .catch((error) => {
            console.log('refresh token failed with error: ', error);
        })
}

export const withToken = async (url: string, data = {}, method: any = 'GET', headers = {}, options: {}) => {
    let accessToken = localStorage.getItem('SA');
    const accessTokenIsExpired = (Date.now() / 1000) > Number(localStorage.getItem('EXP') || 0);

    if (typeof accessToken === 'undefined' || accessToken === null) {
        localStorage.remove();

        window.location.href = `/auth/login?redirect=${window?.location?.pathname || "/"}`
    }

    accessToken = accessTokenIsExpired ? await refreshToken() : localStorage.getItem('SA');

    const isManagement = window?.location?.pathname?.match(/^\/management/)

    const supperCollection = isManagement?  localStorage?.getItem('DEPT') || "": ""

    return simpleRequest(url, data, method, {
        headers,
        "Authorization": `Bearer ${accessToken}`,
        "Site": isManagement ? "management" : "",
        "Department": supperCollection
    }, options);
}

export const getTextForAvatar = (text?: string) => {
    if (!text || text === "" || text.trim() === "") {
        return "VN"
    }
    let txt = ''
    const isEmail = text?.includes('@')
    if (isEmail) {
        text?.split('@')[0]?.split('.')?.map((t) => {
            txt += t[0]
        })
    } else {
        text?.replaceAll(',', ' ')?.split(' ')?.map(t => {
            txt += t[0]
        })
    }
    return txt !== '' ? txt?.slice(0, 2).toUpperCase() : 'DF';
}

export const truncate = (string = '', length = 100) => {
    if (string?.length > length) {
        return string.substring(0, length) + '...';
    }

    return string;
};

export const getPercenProcess = (num1: number, num2: number) => {
    if (num2 === 0 || num1 ===0) return (0).toFixed(2);
    return (100 * num1 / num2).toFixed(2);
}

export const formatTime = (timeInput: string) => {
    const timeSplit = timeInput?.split('T')[0];
    let day = timeSplit.split('-')[2]
    let month = timeSplit.split('-')[1]
    let year = timeSplit.split('-')[0].slice(2)
    return `${day}/${month}/${year}`;
}

export const handleRedirectOpenLink = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getDurationTime = (timeStart: string, timeEnd: string) => {
    const startDate = moment.utc(timeStart)
    const endDate = (timeEnd !== undefined && timeEnd !== 'undefined') ? moment.utc(timeEnd) : moment.utc()

    const duration = moment.duration(endDate.diff(startDate))

    const timer = {
        year: duration.years(),
        month: duration.months(),
        day: duration.days(),
        hour: duration.hours(),
        minute: duration.minutes(),
        second: duration.seconds(),
    }
    return timer;
}
export const getTimeSpend = (timeStart: string, timeEnd: string) => {
    const {year, month, day, hour} = getDurationTime(timeStart, timeEnd)
    if (year !== 0) {
        return `About ${year} year${year > 1 ? 's' : ''}`;
    }
    if (month !== 0) {
        return `About ${month} month${month > 1 ? 's' : ''}`;
    }
    if (day !== 0) {
        return `About ${day} day${day > 1 ? 's' : ''}`;
    }
    if (hour !== 0) {
        return `About ${hour} hour${hour > 1 ? 's' : ''}`;
    }
    return 'Time spend unknow or invadlid.'
}
export const getLatestUpdate = (timeUpdated: string) => {
    const {year, month, day, hour, minute, second} = getDurationTime(timeUpdated, 'undefined')
    if (year !== 0) {
        return `about ${year} year${year > 1 ? 's' : ''} ago`;
    }
    if (month !== 0) {
        return `about ${month} month${year > 1 ? 's' : ''} ago`;
    }
    if (day !== 0) {
        return `about ${day} day${day > 1 ? 's' : ''} ago`;
    }
    if (hour !== 0) {
        return `about ${hour} hour${hour > 1 ? 's' : ''} ago`;
    }
    if (minute !== 0) {
        return `about ${minute} minute${minute > 1 ? 's' : ''} ago`;
    }
    if (second !== 0) {
        return `about ${second} second${second > 1 ? 's' : ''} ago`;
    }
    return 'about some miliseconds.'
}
export const getImageIcon = (typeFile: string) => {
    switch (typeFile) {
        case "application/pdf":
            return {
                text: 'PDF',
                bgcolor: '#ef5350'
            }
        case "application/msword": return {
            text: 'W',
            bgcolor: '#42a5f5'
        };
        case "application/vnd.ms-excel": return {
            text: 'EX',
            bgcolor: '#00bcd4'
        };
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        case "application/vnd.ms-powerpoint": return {
            text: 'PP',
            bgcolor: '#f44336'
        };
        default: break;
    }
}

export const findDepartment = (name: string) => {
    const departments = [
        {
        code:"hr",
        name: "human resource"
    },{
        code: "account",
        name: "account"
    },{
        code: "marketing",
        name: "marketing"
        }, {
            code: "sales",
        name: "sales"
    },
        {
        code:"bod",
        name: "board of directors"
    },
    {code:"finance",
        name: "finance"
    },
        {
        code:'technology',
        name: "technology"
    },
        {
        code:"development",
        name: "development"
    }
    ]
    return departments.find(d => d.code === name?.toLowerCase() || d.name === name?.toLowerCase())
}

export const getRandomBackgroundImage = () => {
    const urlList = [
        {
            id: 1,
            url: `${CLOUD_STORAGE_URL}/background/images/Hinh_Card.png`
        },
        {
            id: 2,
            url: `${CLOUD_STORAGE_URL}/background/images/Hinh_Card_2.png`
        },
        {
            id: 3,
            url: `${CLOUD_STORAGE_URL}/background/images/Hinh_Card_3.png`
        },
        {
            id: 4,
            url: `${CLOUD_STORAGE_URL}/background/images/Image_General_1.png`
        },
        {
            id: 5,
            url: `${CLOUD_STORAGE_URL}/background/images/Image_General_2.png`
        },
        {
            id: 6,
            url: `${CLOUD_STORAGE_URL}/background/images/Image_General_3.png`
        },
        {
            id: 7,
            url: `${CLOUD_STORAGE_URL}/background/images/Image_General_4.png`
        }
    ]
    const position = Math.floor(Math.random() * urlList.length);
    return urlList[position].url
}

export const buildPropertiesLink = ({ renderComponent = "Next", href= ''}: {
    renderComponent: "Next" | "React" | string,
    href: string
}) => {
    if (renderComponent === "Next") {
        return {
            href: href,
            passHref: true
        }
    }
    return {
        to: href,
        replace: true
    }
}
export const formatFileSize= (bytes: number)  =>{
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }