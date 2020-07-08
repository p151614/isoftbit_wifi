
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/**
 * 自定义图形块
 */
//% weight=100 color=#00bc11 icon=""
namespace WIFI网络{

    export let NEW_LINE = "\r\n";
    
    /**
     * TODO: 连接网络
     */
    //% block
    export function ip地址(): string {
        // Add code here

        return "";
    }

    /**
     * TODO: AP模式
     */
    //% block
    export function ap模式(): boolean {
        // Add code here

        return true;
    }

    /**
     * TODO: 连接网络
     */
    //% block
    export function 网络连接状态(): boolean {
        // Add code here

        return true;
    }

    /**
     * TODO: 开启AP模式 
     */
    //% block
    export function 关闭ap模式 (): void {

    }

    /**
     * TODO: 开启AP模式 
     * @param s 网络名称, eg: ssid
     * @param s 密码, eg: pwd
     */
    //% block="开启ap模式|名称%ssid|密码%pwd"
    export function 开启ap模式 (ssid:string, pwd:string): void {

    }

    /**
     * TODO: 开启AP模式 
     * @param s IP地址, eg: ip
     * @param s 端口号, eg: port
     */
    //% block="开启数据收发服务|ip地址%ssid|端口%port"
    export function 开启数据收发服务 (ip:string, port:string): void {

    }

    /**
     * TODO: 断开网络
     */
    //% block
    export function 断开网络(): void {

    }

    /**
     * TODO: 连接网络
     * @param s 网络名称, eg: ssid
     * @param s 密码, eg: pwd
     */
    //% block="连接Wifi网络|名称%ssid|密码%pwd"
    export function 连接Wifi网络(ssid:string, pwd: string): void {
        // Add code here
        Init_Uart();
        serial.writeLine("ATPN=<ssid>,<pwd>");
    }

    function Init_Uart(){
        serial.redirect(SerialPin.P12, SerialPin.P8,BaudRate.BaudRate38400)
    }

}
