# 使用 vscode 进行 debug

## debug 配置文件

vscode 进行 debug 的时候需要使用一个配置文件，这个配置文件中可以配置多个 debug 的方式。

在项目的 `.vscode/launch.json`

### python 常见配置

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            // 当前文件模式
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "justMyCode": false,
        },
        {
            // debug 的模式，主要的区别是这里会指定一个 env 的 PATHONPATH，否则会存在某些模块找不到的问题
            "name": "Python: Debug Tests",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "justMyCode": false,
            "env": { "PYTHONPATH": "${workspaceRoot}:lp" }
        }
    ]
}
```

- `configurations`：不同的配置文件
- `name`：debug 的时候会进行选择，第一个是默认的 debug 程序
- `type` 类型，比如 python、go 等等
- `request`：请求配置的启动类型，一般是 launch
- `program`：程序入口、启动文件
- `console`：日志的显示方式，一般用集成的终端
- `justMyCode`：在 f11 的时候是否进入标准库和第三方库的代码
- `env`：环境变量
- `envFile`：使用环境变量的配置文件
- `port`：使用的端口
- `args`：运行时候附带的参数，比如未知参数、输入输出参数
- `cwd`：进入某个目录中

**一些可用的变量**

- `${env:Name}`：获取环境变量，比如获取 `{env.USERNAME}`
- `${file}`：当前面板活跃的文件，也就是打开的代码文件
- `${workspaceFolder}`：workspace 的根目录，有时候使用工作目录下自带的一个解释器

## 快捷键

|作用 | 快捷键 | 作用 |
|--|--| -- |
|start/continue | F5 | 执行到下一个断点 |
|stop | shift+F5 | 暂停 |
|restart | shift+cmd+F5 | 重启 |
|Toggle breakpoint | F9 | 打断点 |
|step over | F10 | 从断点处执行单步调试 |
|step into/out | F11/shift+F11 | 进入/退出函数内部 |
