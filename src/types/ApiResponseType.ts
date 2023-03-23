export type ApiResponseType<T = any> = {
    /**
     * Data returned in the response.
     */
    data: T;
    /**
     * The responses status code (if applicable).
     */
    status: number;
}