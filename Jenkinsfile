pipeline{
    agent any
    stages{
        stage('clone repository'){
            steps{
                git 'https://github.com/molline/gallery'
            }
        }
        stage('Software Check'){
            sh 'npm install'
        }
        stage('Success'){
            echo 'pipeline successful'
        }
        stage('Build'){
            echo 'Building'
        }
    }
}