pipeline{
    agent any
    tools{
            nodejs "node"
    }
    stages{
        stage('Clone repository'){
            steps{
                git 'https://github.com/molline/gallery'
            }
        }
        stage('Software Check'){
            steps{
                sh 'npm install' //install npm package
                sh 'npm install express'// install express
                sh 'npm install yarn'// install yarn   
                sh 'npm install dotenv'
            }
        }
        stage('Build'){
            steps{
                sh 'yarn'
                //sh 'node server.js'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy to render'){
            steps{
                httpRequest httpMode: 'POST', responseHandle: 'NONE', url: 'https://api.render.com/deploy/srv-cfodbtirrk0fd9oebiag?key=I6jcbHcD5DE', wrapAsMultipart: false
                echo 'Deploy to render was a success'
                slackSend channel: 'molline-ip1', message: "For the ${env.JOB_NAME} build ${env.BUILD_ID}  the site is live at https://gallery-gt7q.onrender.com"

            }
        } 
    }
    post{
        failure{
            emailext to: 'mollinmolline@gmail.com',
            subject: "Jenkins build: ${env.JOB_NAME} Failure", 
            body: "The current build ${currentBuild.currentResult} has failed and more Information can be found here: ${env.BUILD_URL}"
        }
    }
}