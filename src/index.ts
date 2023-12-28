import { StatusBarAlignment, window, workspace } from 'vscode'

interface ConfigItem {
  alignment: string
  command: string
  text: string
  tooltip: string
}
export function getConfig() {
  // 获取全局配置
  const globalConfig = workspace.getConfiguration('showCommandIcons').get('commands') as ConfigItem[] || []

  // 获取工作区配置
  const workspaceConfig = workspace.getConfiguration('showCommandIcons', workspace.workspaceFolders?.[0].uri).get('commands') as ConfigItem[] || []

  // 合并配置，如果 command 一样，工作区配置覆盖全局配置
  const mergedConfig = [...globalConfig.map((gc) => {
    // alignment 必须为left或right 其他值改为left
    if (gc.alignment !== 'left' && gc.alignment !== 'right')
      gc.alignment = 'left'
    return gc
  })]
  for (const wc of workspaceConfig) {
    const index = mergedConfig.findIndex(gc => gc.command === wc.command)
    if (index >= 0)
      mergedConfig[index] = wc

    else
      mergedConfig.push(wc)
  }

  return mergedConfig
}
export function activate() {
  const config = getConfig()
  config.forEach(({ command, text, tooltip, alignment }) => {
    const disposable = window.createStatusBarItem(alignment === 'right' ? StatusBarAlignment.Right : StatusBarAlignment.Left)
    disposable.text = text
    disposable.tooltip = tooltip
    disposable.command = command
    disposable.show()
  })
}

export function deactivate() {

}
