import { app } from '../../server.js';



const errors = {
    "ECONNREFUSED": "ECONNREFUSED",
    "400": "Bad request",
    "401": "Unauthorized Access",
    "403": "Forbidden Access",
    "404": "Not Found",
    "409": "Conflict",
    "500": "Internal Server Error"
};





app.use((error, request, response, next) => {
    //! Manage error from all request

    console.error(error);

    if (!error.code) {
        error.code = 500;
        error.message = "unknown";
    }

    if (error.code) {
        response.status(
            error.code === "ECONNREFUSED"
                ? 500
                : error.code
        ).json({
            "error": errors[error.code.toString()],
            "statusCode": error.code,
            "message": error.message
        });
    }

});

