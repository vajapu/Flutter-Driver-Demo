#!/bin/sh

set -e
export PATH=$BUILD_SOURCESDIRECTORY/flutter/bin:$BUILD_SOURCESDIRECTORY/flutter/bin/cache/dart-sdk/bin:$PATH

# All scripts will be placed here
install_flutter() {
  git clone -b stable https://github.com/flutter/flutter.git

  flutter precache
  yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
  flutter doctor
}

flutter_test() {
  flutter packages get
  flutter drive --target=test_driver/app.dart
}

"$@"
