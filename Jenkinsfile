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
                sh 'npm install --save express'// install express
                sh 'npm install --global yarn'// install yarn
            }
        }
        // stage('Build'){
        //     steps{
        //         sh 'yarn'
        //         //sh 'node server.js'
        //     }
        // }
        stage('Deploy to render'){
            steps{
                httpRequest httpMode: 'POST', responseHandle: 'NONE', url: 'https://api.render.com/deploy/srv-cfodbtirrk0fd9oebiag?key=I6jcbHcD5DE', wrapAsMultipart: false
                echo 'Deploy to render was a success'

            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        
    }
    post{
        failure{
            emailext to: 'mollinmolline@gmail.com',
            subject: 'Jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME} Failure', 
            body: '${currentBuild.currentResult}: Job ${env.JOB_NAME} has and failed more Info can be found here: ${env.BUILD_URL}'
        }
    }
}