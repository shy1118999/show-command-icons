# Show Command Icons
Show Command Icons 是一个 Visual Studio Code 插件，它允许你为 VS Code 状态栏中的命令添加图标。

## 功能
为 VS Code 中的命令添加图标
支持全局和工作区配置
支持自定义命令的图标和工具提示

## 安装
在 VS Code 中打开扩展视图 (Ctrl+Shift+X)，然后在搜索框中输入 Show Command Icons 并选择它，点击安装。

## 配置
在 VS Code 的设置中，你可以通过 showCommandIcons.commands 来配置你的命令。配置项是一个数组，每个项是一个对象，包含以下字段：

+ type: 命令的位置，可以是 left 或 right。
+ text: 命令的文本。
+ command: 命令的名称。
+ tooltip: 命令的工具提示。
例如：
```json
"showCommandIcons.commands": [
    {
      "command": "workbench.action.navigateBack",
      "text": "$(arrow-left)",
      "tooltip": "Go back",
      "alignment": "left"
    },
    {
      "command": "workbench.action.navigateForward",
      "text": "$(arrow-right)",
      "tooltip": "Go forward",
      "alignment": "left"
    },
    {
      "command": "workbench.action.restartExtensionHost",
      "text": "$(debug-restart)",
      "tooltip": "Restart Extension Host",
      "alignment": "left"
    },
    {
      "command": "editor.foldAll",
      "text": "$(fold-down)",
      "tooltip": "Fold All",
      "alignment": "left"
    }
  ]
```

在这个例子中，一个名为 My Command 的命令将被添加到 VS Code 状态栏的左侧，当你将鼠标悬停在它上面时，会显示 This is my command 的工具提示。

## 贡献
欢迎对 Show Command Icons 插件进行贡献。如果你发现了任何问题或有任何建议，欢迎在 GitHub 上提交 issue 或 pull request。

## 许可
Show Command Icons 插件在 MIT 许可下发布。