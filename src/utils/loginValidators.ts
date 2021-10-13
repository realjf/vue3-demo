import { ref } from "vue";

interface User {
    email: string;
    password: string;
}

export const loginUser = ref<User>({
    email: "",
    password: "",
});

interface Rules {
        email: {
            type: string;
            message: string;
            trigger: string;
            required: boolean;
        }[];
        password: ({
            required: boolean;
            trigger: string;
            message: string;
            min?: undefined;
            max?: undefined;
        } | {
            min: number;
            max: number;
            message: string;
            trigger: string;
            required?: undefined;
        })[];
}

// 校验规则
export const rules = ref<Rules>({
    email: [
        { type: "email",  message:"Email is incorrect...", trigger: "blur", required: true }, 
    ],
    password: [
        { required: true, trigger: "blur", message: "Password could not be empty...", }, 
        { min: 6, max: 30, message: "Password's length has to be 6 to 30 characters...", trigger: "blur", },
    ],
})
