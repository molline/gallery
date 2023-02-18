pipeline{
    agent any
    stages{
        stage('Clone repository'){
            steps{
                git 'https://github.com/molline/gallery'
            }
        }
        stage('Software Check'){
            steps{
                sh 'npm install'
            }
        }
        stage('Success'){
            steps{
                echo 'pipeline successful'
            }
        }
        stage('Build'){
            steps{
                echo 'Building'
            }
        }
    }
}