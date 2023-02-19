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
        
    }
}