import 'dart:io';
import 'package:sass/sass.dart' as sass;

// usage
// dart compile-sass.dart

void main() {
  var result = sass.compileToResult(
    'src/scss/styles.scss',
    color: true,
    style: sass.OutputStyle.compressed,
  );
  new File('public/assets/css/styles.css').writeAsStringSync(result.css);
}
