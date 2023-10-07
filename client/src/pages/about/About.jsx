import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Navbar from "pages/navbar/Navbar";

export default function AboutPage() {
  const technologies = [
    {
      name: "MERN Stack",
      description:
        "The MERN Stack is a full-stack JavaScript framework that comprises MongoDB for database management, Express.js for building server applications, React for building user interfaces, and Node.js for server-side runtime. It is a powerful and widely-used stack for developing modern web applications.",
    },
    {
      name: "Redux Toolkit",
      description:
        "Redux Toolkit is a comprehensive set of tools and libraries that simplifies state management in React applications. It provides a predictable and efficient way to manage application state, making it easier to handle complex data flows and interactions.",
    },
    {
      name: "React Router DOM",
      description:
        "React Router DOM is a popular library for handling declarative routing in React applications. It enables navigation between different components and views within a single-page application, making it easy to create complex user interfaces with multiple pages and routes.",
    },
    {
      name: "Material-UI",
      description:
        "Material-UI is a highly customizable and well-designed React UI framework. It offers a wide range of pre-designed UI components and styles based on Google's Material Design guidelines. Material-UI helps developers create beautiful and responsive user interfaces with ease.",
    },
    {
      name: "Yup",
      description:
        "Yup is a JavaScript schema validation library commonly used for form validation and data validation in general. It provides a simple and expressive way to define and validate the shape and content of data, ensuring data integrity and user input validation.",
    },
    {
      name: "dotenv",
      description:
        "dotenv is a zero-dependency module that simplifies the process of loading environment variables from a .env file into the Node.js process environment (process.env). It is a valuable tool for managing configuration and sensitive data in server-side applications.",
    },
    {
      name: "Formik",
      description:
        "Formik is a powerful form management library for React applications. It simplifies the process of building and managing complex forms, handling form validation, submission, and error handling. Formik is known for its simplicity, flexibility, and ease of use.",
    },
  ];

  const backendTechnologies = [
    {
      name: "bcrypt",
      description:
        "A library for securely hashing and storing passwords in the database, providing protection against brute-force attacks.",
    },
    {
      name: "body-parser",
      description:
        "A middleware for parsing request bodies in Express.js applications, enabling easy handling of JSON and URL-encoded data.",
    },
    {
      name: "cors",
      description:
        "A middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications, allowing controlled access to resources from different origins.",
    },
    {
      name: "helmet",
      description:
        "A middleware for setting various HTTP security headers in Express.js applications, enhancing security by mitigating common vulnerabilities.",
    },
    {
      name: "jsonwebtoken (JWT)",
      description:
        "A library for generating and verifying JSON Web Tokens (JWTs) for user authentication, enabling secure authentication and authorization mechanisms.",
    },
    {
      name: "Mongoose",
      description:
        "An Object Data Modeling (ODM) library for MongoDB, simplifying database interactions by providing a schema-based solution.",
    },
    {
      name: "Morgan",
      description:
        "A request logger middleware for Express.js, providing detailed request logs for debugging and monitoring.",
    },
  ];

  return (
    <>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>
          About Me
          <Divider />
          <Divider />
        </Typography>

        <Typography variant="body1">
          Hello! I'm Demitry Gavrisenko, the creator of the project. This
          website serves as a social media platform with a blog-style twist.
          Users can login with an existing account or register a new one to
          enjoy a range of features. You can connect with friends to build your
          social network. Stay connected with people who matter to you. You can
          share post messages, photos, and updates to keep your network
          informed. For your convenience we included Responsive Design for you
          to enjoy a versatile browsing experience on desktops, tablets, or
          mobile phones, as well as Light and Dark Modes to reduce eye strain
          and customize your viewing experience. In addition, we have Real-time
          interaction: You can engage in real-time messaging and stay connected
          with your friends. Keep the conversation going. At BloggerZ, it is all
          about convenience and creating a vibrant online community. Join us
          today to have a great time connecting with friends and sharing your
          thoughts. We have exciting plans for the future, so stay tuned for
          more updates! Have a great day and enjoy BloggerZ!
        </Typography>

        <Typography variant="h4" gutterBottom mt={4}>
          Technologies and Libraries Used
        </Typography>

        <Typography variant="body1">
          This project is built using the following technologies and libraries:
        </Typography>

        <List>
          {technologies.map((tech) => (
            <ListItem key={tech.name}>
              <ListItemText
                primary={<Typography variant="h6">{tech.name}</Typography>}
                secondary={
                  <Typography variant="body1">{tech.description}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" gutterBottom mt={4}>
          Backend Technologies
          <Divider />
          <Divider />
        </Typography>
        <Typography variant="body1">
          On the backend, I used the following technologies and libraries:
        </Typography>
        <List>
          {backendTechnologies.map((tech) => (
            <ListItem key={tech.name}>
              <ListItemText
                primary={<Typography variant="h6">{tech.name}</Typography>}
                secondary={
                  <Typography variant="body1">{tech.description}</Typography>
                }
              />
            </ListItem>
          ))}
          <Divider />
          <Divider />
        </List>
      </Box>
    </>
  );
}
