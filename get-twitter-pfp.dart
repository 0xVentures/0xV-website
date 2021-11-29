import './src/dart/twitter-pfp.dart';

Future<void> main() async {
  await read_members();
  await get_pfps_url();
  await save_pfps();
  await write_members_js();
}
