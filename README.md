# Alpha, Return, and Volatility Analysis Application

## Overview

This document provides an overview of the React-based application designed to perform financial analysis on stock data, focusing on Alpha, Return, and Volatility metrics. The application leverages React for UI components and Axios for API calls.

## Application Components

### Alpha Analysis

#### AlphaComponent

- **_Description:_** The **_AlphaComponent_** is responsible for managing the state and rendering the form to input data and display the results.
- **_Functionalities:_**
  - Holds state for the alpha data and error messages.
  - Renders the **_AlphaFormComponent_** for user inputs.
  - Renders the **_AlphaDisplayComponent_** to display the alpha analysis results.

### Return Analysis

#### ReturnComponent

- **_Description:_** The **_ReturnComponent_** handles the process of fetching and displaying daily return data based on user inputs.
- **_Functionalities:_**
  - Manages the state for return data and error messages.
  - Renders the **_FormComponent_** for user inputs.
  - Renders the **_ReturnChartComponent_** to display the return data in a chart format.

### Volatility Analysis

#### VolatilityComponent

- **_Description:_** The **_VolatilityComponent_** manages the process of fetching and displaying volatility data based on user inputs.
- **_Functionalities:_**
  - Manages the state for volatility data and error messages.
  - Renders the **_FormComponent_** for user inputs.
  - Renders the **_VolatilityChartComponent_** to display the volatility data in a chart format.

### Context Usage for State Management

#### Context Overview

To manage and share state across different components, the application uses React Context. This approach ensures that the states for Alpha, Return, and Volatility data are maintained consistently throughout the application. The context is defined in the **_AppContext.js_** file and includes the following states:

- **_alphaData:_** Stores the data for Alpha analysis.
- **_returnData:_** Stores the data for Return analysis.
- **_volatilityData:_** Stores the data for Volatility analysis.

### Navigation

#### NavBar

- **_Description:_** The **_NavBar_** component provides navigation links to different sections of the application.
- **_Functionalities:_**
  - Contains links to the Alpha, Return, and Volatility analysis pages.
  - Uses React Router for navigation between different routes.

## Backend Configuration

The application calls the backend API at **_localhost:8080_**. This configuration can be updated in the **_Url.js_** file if the backend port changed.

Backend on Github:https://github.com/usacode/iex-api/tree/master
## How to Run the Application

1. **_Install Dependencies:_**
   Make sure you have Node.js installed. Then, navigate to the project directory and run:

**_npm install_**

2. **_Update Backend URL:_**
   If the backend API's port or address changes, update the **_Url.js_** file with the new backend URL.
3. **_Start the Development Server:_**
   To start the application, run:

**_npm start_**

4. **_Access the Application:_**
   Open a web browser and navigate to **_http://localhost:3000_** to access the application.
5. **_API Requirements:_**
   Ensure that the backend API is running and accessible at the configured URL to allow the application to fetch data.
