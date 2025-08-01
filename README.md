# React 表单校验文档网站

这是一个基于 React + Vite + Ant Design 4.x 构建的表单校验文档网站，旨在展示各种表单校验场景和最佳实践，帮助开发者快速掌握表单校验技巧。

## 在线预览

- 预览地址：[https://react-form-validate-7mfv1u311-xiumubais-projects.vercel.app](https://react-form-validate-7mfv1u311-xiumubais-projects.vercel.app)
- GitHub仓库：[https://github.com/xiumubai/react-form-validate](https://github.com/xiumubai/react-form-validate)

## 功能特点

- 📚 多种表单校验场景展示
- 🔍 详细的代码示例和说明
- 📋 可复制的模板代码
- 📱 响应式设计，适配各种设备

## 表单校验场景

- **基础表单校验**：必填项、格式、长度/范围、自定义校验函数
- **嵌套表单校验**：对象嵌套校验、动态嵌套表单
- **循环列表校验**：动态增减表单项
- **表单关联校验**：字段间的联动校验
- **分步表单校验**：多步骤表单

## 技术栈

- React 19
- Vite 7
- Ant Design 4.x
- React Router 7
- Node.js 22+

## 安装与运行

### 前提条件

- Node.js 22+ (推荐使用 nvm 管理 Node.js 版本)
- npm 或 yarn

### 安装步骤

1. 克隆或下载本项目

2. 安装依赖
```bash
npm install
# 或
yarn
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 在浏览器中访问 http://localhost:5173 (或终端中显示的其他端口)

## 项目结构

```
src/
├── components/       # 公共组件
│   ├── CodeBlock.jsx # 代码块组件
│   └── layout/       # 布局组件
├── pages/            # 页面组件
│   ├── basic/        # 基础表单校验
│   ├── nested/       # 嵌套表单校验
│   ├── dynamic/      # 循环列表校验
│   ├── related/      # 表单关联校验
│   └── step/         # 分步表单校验
├── router/           # 路由配置
├── styles/           # 全局样式
└── main.jsx          # 入口文件
```

## 使用指南

1. 在左侧导航栏选择需要查看的表单校验场景
2. 查看示例表单及其校验效果
3. 点击代码块右上角的复制按钮，复制代码到自己的项目中使用

## 表单校验场景详解

### 基础表单校验

- **必填项校验**：确保用户填写必要信息
- **格式校验**：验证邮箱、手机号等特定格式
- **长度/范围校验**：限制输入内容的长度或数值范围
- **自定义校验函数**：实现复杂的校验逻辑，如密码强度校验

### 嵌套表单校验

- **对象嵌套校验**：处理具有层级结构的数据，如地址信息
- **动态嵌套表单**：处理复杂的嵌套数据结构

### 循环列表校验

- **动态增减表单项**：处理数组类型的数据，如团队成员列表

### 表单关联校验

- **字段间的联动校验**：根据一个字段的值影响另一个字段的校验规则

### 分步表单校验

- **多步骤表单**：将复杂表单分解为多个步骤，逐步完成

## 已知问题

- Ant Design 4.x 与 React 19 存在部分兼容性问题，可能会在控制台看到关于 `element.ref` 的警告，这不影响功能使用。如需解决，可考虑升级到 Ant Design 5.x。

## 贡献

欢迎提交 Issue 或 Pull Request 来完善这个项目。

## 许可证

MIT
