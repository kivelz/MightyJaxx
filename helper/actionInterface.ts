export interface IAction<T> {
    type: string;
    payload?: any;
    error?: any;
    params?: IActionParams;

    [key: string]: any;
}
export interface IActionParams {
    sectionId?: string;
    isAppend?: boolean;
    canLoadMore?: boolean;

    [key: string]: any;
}