import { LinkProps as NextLinkProps } from "next/link"
import { LinkProps as ReactRouteLinkProps } from "react-router-dom"

export declare type LoginTypes = {
    email: string,
    password: string,
}

export declare type DeviceToken = {
    uuid: string,
    token: string,
    uid?: number
}

export declare type SearchQueriesTypes = {
    query?: string
}

export declare type VirtualElement = {
    getBoundingClientRect: () => ClientRect | DOMRect,
    contextElement?: Element,
}

export declare type AnchorElTypes = HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement) | null | undefined | any

export declare type EventClickTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>

export declare type SlugType = string | null | undefined

export declare type LessonType = {
    id: number
    thumb_url?: string
    title: string
    lessonable_type: string
    lessonable_id: number
    description?: string
    is_parent: boolean
    prefix_path: string
    slug: string
    author_id: number
    updated_at: string
    completed: boolean
    employee_wishlist_ids: number[]
    employee_complete_ids: number[]
    logger: {
        videos: VideoLoggerType[]
    }
    lesson_thumb_url: string
    thumb: string
    thumb_size?: number
    thumb_type?: string
    course: CourseType
    parent?: CourseType | LessonType,
    sections?: SectionType[]
    recommend_lesson_ids: number[],
    tags?: any[]
}

export declare type VideoLoggerType = {
    id: number
    lesson_id: number
    author_id: number
    time_end: number
    video_position: number
    created_at: string
    update: string
}

export declare type SectionType = {
    id: number
    thumb?: string
    thumb_url?: string
    heading: string
    title_file: string
    subheading: string
    content: string
    section_thumb_url: string
    thumb_title: string
}


export declare type VideoType = {
    id: number
    title: string
    video_type_number: number
    video_thumbnail_url: string
    video_thumb_url: string
    embed_code?: string
    updated_at: string
    created_at: string
}

export declare type TagType = {
    
}

export declare type DownloadType = {
    
}

export declare type CheckingType = {
    id: number
    lesson_id: number
    question: string
    created_at: string
    updated_at: string
    question_type_number: number
    answer: string
    options: any
}

export declare type QuestionType = {
    
} | any

export declare type AnswerType = {
    answer: string
    id: number
    position: number
    question: string
    question_type_number: number
    
}

export declare type LoggerType = {
    
} | any

export declare type LinkTypes = React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>> | React.ForwardRefExoticComponent<ReactRouteLinkProps & React.RefAttributes<HTMLAnchorElement>>

export declare type AuthorInformationType = {
    employee_email: string

} | any

export declare type CourseType = {
    id: number
    course_thumb_url?: string
    title: string
    description: string
    updated_at: string
    thumb: string
    thumb_url?: string
    course_type_number: number
    author_id: number
    slug: string
    department_name: string
    department_shared_names: string[]
}

export declare type ExaminationType = {
    id: number
    slug: SlugType
    title: string
    description: string
    time: string
    employee_assigned_ids: number[]
    questions: any[]
    hidden: boolean
    created_at: string
    updated_at: string
    employee_complete_ids: number[],
    starttime: string,
    endtime: string
    hour: number,
    minute: number
    second: number
}

export declare type EmployeeType = {
    employee_id: number
    employee_email: string
    employee_name: string
    employee_email_company?: string
    employee_department: string
    employee_level: number
    employee_disable: boolean
}

export declare type BreadCrumbType = {
    title: string
    href: string
    active: boolean
}

export declare type FormVideoLoggerType = {
    id?: number
    time_end: number
    video_position: number
    author_id: number
}

export declare type SectionLogger = {
    id: number
    lesson_id: number
    author_id: number
    log: any
    created_at: string
    updated_at: string
}

export declare type CommentType = {
    id: number
    commentable_type: string
    commentable_id: number
    body: string
    favorite_employee_ids: number[]
    unfavorite_employee_ids: number[]
    author_id: number
    created_at: string
    updated_at: string
}


export declare type FileType = File

export declare type ClassroomType = {
    id: number
    title: string
    description: string
    employee_assigned_ids: number[]
    author_id: number
    slug: string
    department_name: string
    created_at: string
    updated_at: string
    classroom_thumb_url?: string
    thumb: string
    timelines: TimelineType[]
}
export declare type TimelineType = {
    slug: SlugType
    title: string
    id: number
    start_date: string
    end_date: string
    menu_timeline_items: string[]
}

export declare type CollectionType = {
    id: number
    title: string
    parentId: number
    status: number
    level: number
    childrens?: CollectionType[]
}
