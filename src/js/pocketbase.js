// for all calls to the pocketbase api

// Initialize the PocketBase instance
const pb = new PocketBase('https://timebuddy.api.emrymcgill.com');

// get auth data
const authData = pb.authStore.model;

// create user
const createUser = async (data) => {
    // try to create the user
    try {
        const record = await pb.collection('users').create(data);
        // successful, redirect to login page
        window.location.href = './login.html';
      } catch (error) {
        // failed, display the errors
        if (error.data.data?.email) {
          document.getElementById('email-err').innerHTML = error.data.data?.email.message
        }
        if (error.data.data?.password) {
            document.getElementById('password-err').innerHTML = error.data.data?.password.message
        }
        if (error.data.data?.passwordConfirm) {
          document.getElementById('password-confirm-err').innerHTML = error.data.data?.passwordConfirm.message
        }
    }
}

// login user
const loginUser = async (email, password) => {
    // atempt to login user
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        // login successful, redirect to home page
        window.location.href = './index.html';
      } catch (error) {
        // login failed, display the errors
        document.getElementById('err').innerHTML = "Incorrect email or password"
      }
}

// validate user
const validateUser = async () => {
    // check if user is logged in
    if (!authData) {
        // no saved login in local storage, redirect to login page
        console.log("no saved login")
        window.location.href = '/html/login.html';
    }

    // there is a saved login, now check if user exists
    try {
        const records = await pb.collection('users').getFullList({filter: `id = "${authData.id}"`});
        if (records.length == 0) {
            // user does not exist
            console.log("user not found")
            window.location.href = '/html/login.html';
        }
    } catch (error) {
        // user not logged in redirect to login page
        console.log("error logging in")
        window.location.href = '/html/login.html';
    }
}

// fetch user data from pocketbase
const getUser = async () => {
    try {
        const user = await pb.collection('users').getOne(authData.id);
        return user
    } catch (error) {
        console.log(error)
    }
}

// update user
const updateUserBreakLength = async (break_length) => {
    // try to update the users break
    try {
        await pb.collection('users').update(authData.id, {
            break_length: break_length
        });
    } catch (error) {
        // error occured
        console.log(error)
    }
}

//  fetch ALL projects from pocketbase
const getProjects = async () => {
    try {
        return await pb.collection('projects').getFullList({
            sort: '-priority',
        })
    } catch (error) {
        console.log(error)
    }
}

// create a project
const createProject = async (title, user_id) => {
    // try to create the project
    try {
        // get all the projects to get the # of projects
        const projects = await getProjects();
        const numProjects = projects.length;

        return await pb.collection('projects').create({
            title: title,
            user_id: authData.id,
            priority: numProjects
        })
    } catch (error) {
        console.log(error)
    }
}

// fetch ALL time logs from pocketbase
const getTimeLogs = async () => {
    try {
        return await pb.collection('daily_time').getFullList()
    } catch (error) {
        console.log(error)
    }
}

// create a time log
const createTimeLog = async (time, projectId) => {
    try {
        return await pb.collection('daily_time').create({
            time: time,
            project_id: projectId,
            user_id: authData.id
        })
    } catch (error) {
        console.log(error)
    }
}

const updateTimeLog = async (time, log) => {
    try {
        return await pb.collection('daily_time').update(log.id, {
            time: time + log.time
        })
    } catch (error) {
        console.log(error)
    }
}
