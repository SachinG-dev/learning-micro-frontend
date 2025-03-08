# Micro-Frontend Application Setup

This repository contains two micro-frontend applications (`airpriceIQ` and `cro-application`) along with a host application (`MFApp`). Follow the instructions below to run each application independently and integrate them into the micro-frontend host.

---

## Folder Structure

```
├── airpriceIQ
├── cro-application
└── MFApp
```

---

## Step 1: Setup Individual Applications

### 1. Setup airpriceIQ Application

Navigate to the `airpriceIQ` folder:

```bash
cd airpriceIQ
```

Install dependencies:

```bash
yarn install
```

Start the React application:

```bash
yarn start
```

The airpriceIQ application will run on `http://localhost:3001`

### 2. Setup CRO Application

Navigate to the `cro-application` folder:

```bash
cd cro-application
```

Install dependencies:

```bash
yarn install
```

Start the React application:

```bash
yarn start
```

The CRO application will run on `http://localhost:3002`

---

## Step 2: Setup and Run Host Application (MFApp)

Navigate to the `MFApp` folder:

```bash
cd MFApp
```

Install dependencies:

```bash
yarn install
```

Start the host application:

```bash
yarn start
```

The MFApp application will run on `http://localhost:3000`

---

## Accessing Applications

Once the MFApp (shell application) is running, use the provided navigation buttons to load either the `airpriceIQ` or `CRO` applications.

Ensure both micro-frontends are running simultaneously so that the host application can load their content correctly.

---

## Troubleshooting

- If ports conflict, consider changing the port number in respective application's `package.json` scripts:

Example:

```json
"scripts": {
    "start": "PORT=3003 react-scripts start"
}
```

---

### You're all set! 🎉
