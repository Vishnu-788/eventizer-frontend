export interface LlmResponse {
    "user_query": string,
    "llm_response": string,
}

export interface MessageModel {
    message: string;
    author: 'user' | 'llm'
}