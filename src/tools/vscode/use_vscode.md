## UX

> `VSCode` 整个界面叫 `workbench`（工作台），注意区分 `workspace`（工作空间），工作空间更多的是项目的 `path` 概念，和 VS Code 关系不大，而 `workbench` 是 `VSCode` 提供的概念，其实整个 `Windows` 都可以算是 `workbench`。

`VSCode` 的设计理念是：`Containers` 和 `items`，整个编辑器可以看成是一个 `Container`，里面包含各种 `items`，比如 `activity bar`、`editor`。

![VSCode UX containers](https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-containers.png)

`Activity bar` 又可以看成是一个 `Container`，里面包含了各种 `items`（`source code control`、`extensions`、`run and debug`...）

![Alt text](https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-sections.png)

![Alt text](https://code.visualstudio.com/assets/api/ux-guidelines/examples/activity-bar.png)

## Activity Bar

核心的导航界面，点击对应的 `item`，会在 `primary sidebar` 中渲染视图呈现结果。比如 `click` 文件浏览器，会渲染出文件夹和文件列表。

![Alt text](https://code.visualstudio.com/assets/api/ux-guidelines/examples/activity-bar.png)

## Sidebar

### Primary Sidebar

渲染 `Activity bar click` 后生成的视图，这两个是紧密相连的关系。

![primary-sidebar](https://code.visualstudio.com/assets/api/ux-guidelines/examples/primary-sidebar.png)


### Secondary Sidebar

![Alt text](https://code.visualstudio.com/assets/api/ux-guidelines/examples/secondary-sidebar.png)

### Sidebar's toolbar

![sidebar-toolbar-default](https://code.visualstudio.com/assets/api/ux-guidelines/examples/sidebar-toolbar-default.png)

action：操作，行动

![sidebar-toolbar-actions](https://code.visualstudio.com/assets/api/ux-guidelines/examples/sidebar-toolbar-actions.png)


## Editor

## Panel

## Status Bar

![status-bar](https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar.png)

## Panel Toolbar

面板工具栏

## Editor Actions

![editor-actions](https://code.visualstudio.com/assets/api/ux-guidelines/examples/editor-actions.png)

## Command Palette

![command-palette](https://code.visualstudio.com/api/ux-guidelines/images/examples/command-palette.png)

## Quick Pick

![quick-pick](https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick.png)

各种常用的命令进行分类放到菜单中

## notification

![notification](https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification.png)

## Context Menus

![Context Menus](https://code.visualstudio.com/assets/api/ux-guidelines/examples/context-menu.png)


## 侧边栏

### 文件资源管理器

### 搜索

### 源码控制

### 启动和调试

### 远程连接

### 拓展

## 编辑器

## 底部面板

### 问题面板

`Problems Panel`：展示当前文件夹下代码里的所有问题和警告，比如你的代码有语法错误、格式问题、拼写错误等，这些问题和警告都会被收集在这个面板中。

### 输出面板

`Output Panel`：将核心命令和插件的运行状态和结果输出来，比如你使用 Git 来管理你的代码版本，你的每个 UI 上的版本操作，你都能在输出面板里看到这个操作对应的 Git 命令行以及它的运行结果。

有对应的过滤器进行筛选具体操作的工具（比如 task、sync状态等）。

### 调试控制台

debug 的时候运行的详细命令，还可以在这个面板下进行各种 debug 的操作。

### 终端

正常使用即可

### 端口

一般不用

### 其他拓展定义的面板


## 命令行面板



## 配置

### 编辑器

字体：'JetBrains Mono'
字体大小：16
行高：26

```json
{
    "editor.renderWhitespace": "all" // 渲染空格和 tab，让其显示
    "editor.renderLineHighlight": "all" // 渲染高亮的行
    "workbench.colorCustomizations": { // 高亮的配置
        "editor.lineHighlightBackground": "#E7F4D8",
        // "editor.lineHighlightBorder": "#0000ff" // bor
    },
}
```

### 空格

```json
"editor.detectIndentation": false,  //关闭检测第一个 tab 后面就 tab
"editor.renderControlCharacters": true, //制表符显示->
"editor.renderWhitespace": "all", //空格显示...
"editor.tabSize": 4,//tab 为四个空格
"editor.insertSpaces": true //转为空格
```

## 编辑器

### 格式化

三个级别：

1.  Paste 粘贴的时候
2. Save 保存的时候
3. Type 输入的时候

一般都会选择上

### 工作台

vscode 有 7 部分组成：顶部菜单栏、活动栏、侧边栏、编辑器、底部面板、状态栏、命令面板

### 窗口

### 终端

字体：'JetBrains Mono', 'MesloLGS NF'
字体大小：14
行高：1.2

## 拓展

允许程序的拓展，里面有一个快捷键：`ctrl-k + n`，会直接运行程序

![]

## 最佳实践

## 插件

### File Utils

一个快速创建、重命名、复制、删除文件和目录的插件

## 文件

## 快捷键

### Activity Bar

```json
{
    // Activity bar
    //
    // Explorer
    // Search
    // Source control
    // Run and Debug
    // Extensions
    // Remote explorer
    {
        "key": "shift+cmd+e",
        "command": "workbench.view.explorer", // Explorer
        "when": "viewContainer.workbench.view.explorer.enabled"
    },
    {
        "key": "shift+cmd+f",
        "command": "workbench.view.search", //Search
        "when": "workbench.view.search.active && neverMatch =~ /doesNotMatch/"
    },

    {
        "key": "shift+cmd+g",
        "command": "workbench.view.scm", // Source control
        "when": "workbench.scm.active"
    },
    {
        "key": "shift+cmd+d",
        "command": "workbench.view.debug", // Run and debug
        "when": "viewContainer.workbench.view.debug.enabled"
    },
    {
        "key": "shift+cmd+x",
        "command": "workbench.view.extensions", // extensions
        "when": "viewContainer.workbench.view.extensions.enabled"
    },
    {
        "key": "shift+cmd+r",
        "command": "workbench.view.remote" // Remote
    },
    {
        "key": "shift+cmd+t",
        "command": "workbench.view.extension.test" // Test
    },
}
```

### 工作台

vscode 有 7 部分组成：顶部菜单栏、活动栏、侧边栏、编辑器、底部面板、状态栏、命令面板

### 窗口

### 终端

字体：'JetBrains Mono', 'MesloLGS NF'
字体大小：14
行高：1.2

## 拓展

允许程序的拓展，里面有一个快捷键：`ctrl-k + n`，会直接运行程序

## 快捷键

### 顶部菜单栏

`cmd + ,`：打开 setting
`cmd + w`：关闭 tab

### 活动栏

`cmd + shift + e`：打开资源管理器，焦点在活动栏和编辑器切换，有时候会被别的占用了，需要检查一下，mac 下容易被搜狗输入法占用。
`cmd + shift + f`：打开搜索
`cmd + shift + h`：打开文件替换
`cmd + shift + g`：打开源码控制，**自定义的**
`cmd + shift + d`：打开调试
`cmd + shift + x`：打开拓展
`cmd + shift + t`：打开测试，***自定义的**

`cmd + shift + b`：运行任务

### 侧边栏 side bar

`cmd + b`: 显示和隐藏侧边栏，side-bar

### 底部面板

`cmd + j`：打开底部的浮动面板，浮动面板的开关
`cmd + shift + m`：problem panel
`cmd + shift + u`：output panel
`ctrl + ``：打开终端，新建终端

debug console 在打开调试的时候会自动打开

### 编辑器操作

`cmd + \`：分栏
`cmd + 1/2/3/4`：打开分栏后，切换不同的 tab
`cmd + p`：切换不同 tab，还支持搜索，也可以用`cmd + option + 方向键`、`ctrl + tab` 实现，但是不好用
`cmd-k + z`：zen 模式
`cmd-k + v`：打开 markdown 预览

### 代码相关

`f12`：跳转到定义
`shift + f12`：跳到引用
`option + f12`: 查看定义
`ctrl + -`：返回，go back
`ctrl + shift + -`：前进 go forward

`cmd+k + j`：自定义的运行 java 程序快捷键
`cmd+k + n`：code run 插件自定义的运行代码的快捷键，Java 不要使用，因为带 package 的会运行错误

一般来说：我会跳转到定义，然后再跳转，这个时候需要返回查看一下定义，就是返回，这个时候还可以再继续返回，或者会到原来的地方。

### 文件

光标在文件上的时候 `r` 进行重命名

## localHistory

vscode 现在的版本内置了 local history 的功能，可以在设置中开启。

还有三个配置

1. 忽视文件等
2. 最大本地存储历史
3. 被纳入本地存储的文件大小条件，默认是 256k，低于这个大小的文件才会被纳入管理

我使用的配置

```json
"workbench.localHistory.maxFileEntries": 50,
"workbench.localHistory.maxFileSize": 3072
```

存储在本地的目录是

```shell
# in VSCode appSettingsHome/History

# Windows
C:\Users<username>\AppData\Roaming\Code\User\History

# MacOS
$HOME/Library/Application\ Support/Code/User/History

#Linux
$HOME/.config/Code/User/History
```

## 常用插件

插件存储位置是`~/.vscode/`

## 编辑器

### vim

## 语言

### Markdown

url 标题解析
[GitHub - capybara1/vscode-url-title-resolver: Resolves selected URLs of one or more HTML pages and uses the document title(s) to format Markdown links](https://github.com/capybara1/vscode-url-title-resolver)

无配置，一般来说选择全部然后输入命令解析即可。

### Python

格式化代码 black
[GitHub - microsoft/vscode-black-formatter: Formatting support for Python using the Black formatter](https://github.com/microsoft/vscode-black-formatter)

配置

```json
"[python]": {
 "editor.defaultFormatter": "ms-python.black-formatter",
 "editor.formatOnSave": true
}
```

|Settings|Default|Description|
|---|---|---|
|black-formatter.args|`[]`|Custom arguments passed to `black`. E.g `"black-formatter.args" = ["--config", "<file>"]`|

命令行

只有一个强制重启的命令

|Command|Description|
|---|---|
|Black Formatter: Restart|Force re-start the format server.|

vscode-isort

导入库顺序排序

[GitHub - microsoft/vscode-isort: Import sorting for python using the isort library.](https://github.com/microsoft/vscode-isort)

vscode-flake8
代码检查工具
[GitHub - microsoft/vscode-flake8: Linting support for python using the flake8 library.](https://github.com/microsoft/vscode-flake8)

|Settings|Default|Description|
|---|---|---|
|flake8.args|`[]`|Custom arguments passed to `flake8`. E.g `"flake8.args" = ["--config=<file>"]`|

常用配置

`"flake8.args": ["--max-complexity=10", "--max-line-length=99"],`

### 前端

Emmet 神奇需要后续重点看一下。

## 测试

## 数据库

SQLite3 编辑器
[GitHub - yy0931/sqlite3-editor](https://github.com/yy0931/sqlite3-editor)

MySQL 插件
[GitHub - cweijan/vscode-database-client: Database Client For Visual Studio Code](https://github.com/cweijan/vscode-database-client)

[GitHub - mechatroner/vscode\_rainbow\_csv: 🌈Rainbow CSV - VS Code extension: Highlight CSV and TSV spreadsheet files in different rainbow colors](https://github.com/mechatroner/vscode_rainbow_csv)

## 项目管理

### project manager

[GitHub - alefragnani/vscode-project-manager: Project Manager Extension for Visual Studio Code](https://github.com/alefragnani/vscode-project-manager)

### gitignore

gitignore 文件生成

[GitHub - CodeZombieCH/vscode-gitignore: A simple extension for Visual Studio Code that lets you pull .gitignore files from the https://github.com/github/gitignore repository](https://github.com/CodeZombieCH/vscode-gitignore)
`cmd + shift + p` 使用命令，git，会有一个 add .gitignore 的选项，选择一个即可，如果是多个情况，可以继续再来一遍，会有一个提示，overwrite 还是 add 选项，选择一个即可。

### GitLens

git 更多功能的集成

## Bash

### 插件

- [shellman](https://github.com/yousefvand/shellman)：代码补全
- [shell-format](https://github.com/foxundermoon/vs-shell-format)：格式化工具
- [ShellCheck](https://github.com/vscode-shellcheck/vscode-shellcheck)：shell 检查工具

## 使用vscode写python

# 使用 vscode 写 python

## 插件

### 生成注释文档字符串

[GitHub - NilsJPWerner/autoDocstring: VSCode extension that generates docstrings for python files](https://github.com/NilsJPWerner/autoDocstring)

### mypy 静态类型检查工具

主要是类型检查器，和 flake8 的区别在于，mypy 聚焦于类型相关的检查，而 flake8 更加复杂，甚至包含了复杂度的分析。

简单说：mypy 帮助检查类型相关，flake8 静态分析工具，保证质量

[GitHub - microsoft/vscode-mypy: Linting support for Python using the mypy linter.](https://github.com/microsoft/vscode-mypy)

### black 格式化工具

[GitHub - microsoft/vscode-black-formatter: Formatting support for Python using the Black formatter](https://github.com/microsoft/vscode-black-formatter)

保存的时候格式化配置

```json
"[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
"python.formatting.provider": "none" // 这个配置是为了防止和原来的 vscode python 配置冲突，因为现在 vscode black 已插件形式存在了
}
```

### isort 导入格式化工具

[GitHub - microsoft/vscode-isort: Import sorting for python using the isort library.](https://github.com/microsoft/vscode-isort)
isort 在保存的时候同时格式化，需要配置一下，搭配 black 使用

```json
"[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    },
},
"isort.args":["--profile", "black"],
```

### 静态代码分析器 flake8

[GitHub - microsoft/vscode-flake8: Linting support for python using the flake8 library.](https://github.com/microsoft/vscode-flake8)

## 使用vscode写jupyter

### 运行 shell

使用感叹号可以运行 shell 命令

```jupyter
!cat foo.bar
```


## VSCode 简介

### 主要特点

Open source and free：开源免费

Multi-platform：全平台支持

Meet IntelliSense：智能提示和补全

Debug code：支持调试的、断点和

Git commands built-in：内置 git

Extensible and customizable：拓展和可定制化

## 核心组件

### `Electron`

`Github` 开源的以 `Node.js` 为 `runtime`，`Chromium` 为渲染的开源框架，可以使用前端技术开发跨平台的应用。`Electron` 的前身是 `Atom Shell`，也是 `Atom` 编辑器的核心组件。

### `Monaco Editor`

基于浏览器的代码编辑器，现在基于浏览器的 `Web IDE` 在线代码编辑基本上都是基于这个项目。

### `TypeScript`

取代 `JS`便于大型项目的协作开发。

### `Language Server Protocol`

即 `LSP`，是编辑器和编程语言之间的一种协议，使用 `JSON-RPC` 进行消息通讯，

- 解决了 `Node.js` 不能运行其他原生编程语言服务器。
- 解决了性能问题，原生编程语言服务器需要去解析文件、生成语法树、静态分析，非常消耗性能。
- 解决了开发工作量，使用了统一的 `API`。

### `Debug Adapter Protocol`

基于 `JSON` 协议，抽象了开发工具和调试工具的通信。

### `Xterm.js`

集成终端，通过 `Xterm.js` 打通了 `bash/cmd/zsh...` 之间的通讯。

## 快速入门

> 稳定版本和 `Insiders` 版本是可以在同一台机器上同时存在的，并且两者是独立的存在。

### 配置

#### 配置的范围

主要分为：`User Settings` 和 `Workspace Settings`，前者可以理解为 `global`配置，后者可以理解为某个项目的 `local` 配置，`local` 配置会覆盖 `global`

#### 配置文件

配置文件分成两种格式：`UI` 和 `JSON` 文件（一开始设计的时候是没有 `UI` 界面的。是在后来用户强烈反馈才加上去的）。

快捷键：`Ctrl+,`，或者使用 `Ctrl+Shift+p`调出命令面板搜索 `setting`即可。

#### 配置的安全问题

一些涉及到安全的配置只能在 `User Settings` 进行配置：`git.path、terminal.integrated.shell.linux、osx、exec...` 等等

#### 一些基础配置

### 基本布局

编辑器

侧边栏

状态栏

活动栏

面板

## 进阶使用
