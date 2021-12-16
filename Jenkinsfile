@NonCPS
def cancelPreviousBuilds() {
  String jobname = env.JOB_NAME
  int currentBuildNum = env.BUILD_NUMBER.toInteger()

  def job = Jenkins.instance.getItemByFullName(jobname)
//   print('jobname: ' + jobname)
  for (build in job.builds) {
    //   print('build.getNumber(): ' + build.getNumber())

    if (build.isBuilding() && currentBuildNum > build.getNumber().toInteger()) {
      build.doStop();
      echo "Build ${build.toString()} cancelled"
    }
  }
}

pipeline {

    agent {
        docker {
            image "akaytatsu/cibuilder:1.2.17"
        }
    }

    stages {

        stage('Init') {
            when {
                expression {
                    return env.GIT_BRANCH == 'homolog'
                }
            }
            steps {
                cancelPreviousBuilds()
                script  {
                    sh "apk add git "
                }
            }
        }

        stage('checkout') {
            when {
                expression {
                    return env.GIT_BRANCH == 'homolog'
                }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'bitbucket_devvert', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                    sh 'git config --global user.email "dev@vert-capital.com"'
                    sh 'git config --global user.name "Dev Integrations"'
                    sh "rm -rf ./vertc-ops-front/"
                    sh "git clone https://$GIT_USERNAME:$GIT_PASSWORD@bitbucket.org/sistema_vert/vertc-ops-front.git"
                    sh "cd vertc-ops-front && git checkout homolog && git pull origin homolog"
                    sh "cd vertc-ops-front && git checkout dev_europa && git pull origin dev_europa && git merge origin/homolog && git push origin dev_europa"
                    sh "cd vertc-ops-front && git checkout dev_ganimedes && git pull origin dev_ganimedes && git merge origin/homolog && git push origin dev_ganimedes"
                    sh "cd vertc-ops-front && git checkout dev_calisto && git pull origin dev_calisto && git merge origin/homolog && git push origin dev_calisto"
                    sh "rm -rf ./vertc-ops-front/"
                }
            }
        }
    }

    post {

        failure {
            echo "Notify bitbucket failure"
            emailext body: "<b>Erro no merge HOMOLOG nas branchs de dev dos squads!</b><br>JOB: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}",
                 from: 'noreply@vert-capital.com',
                 mimeType: 'text/html',
                 subject: "ERROR CI: Project name -> ${env.JOB_NAME}",
                 to: "desenvolvedores@vert-capital.com"
        }

        aborted {
            echo "Notify bitbucket failure"
        }

        unsuccessful {
            echo "Notify bitbucket failure"
        }
    }
}
