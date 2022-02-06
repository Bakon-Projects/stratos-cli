# Stratos

Custom CLI for XiBakon

[![Stratos](https://img.shields.io/badge/cli-stratos-brightgreen.svg)](https://github.com/bakon-projects/stratos-cli)
[![Version](https://img.shields.io/npm/v/stratos.svg)](https://npmjs.org/package/@xibakon/stratos)
[![License](https://img.shields.io/npm/l/stratos.svg)](https://github.com/bakon-projects/stratos-cli/blob/main/package.json)

<!-- toc -->

-   [Stratos](#stratos)
-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @xibakon/stratos
$ stratos COMMAND
running command...
$ stratos (--version)
@xibakon/stratos/1.0.0 darwin-arm64 node-v16.13.1
$ stratos --help [COMMAND]
USAGE
  $ stratos COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`stratos help [COMMAND]`](#stratos-help-command)
-   [`stratos plugins`](#stratos-plugins)
-   [`stratos plugins:inspect PLUGIN...`](#stratos-pluginsinspect-plugin)
-   [`stratos plugins:install PLUGIN...`](#stratos-pluginsinstall-plugin)
-   [`stratos plugins:link PLUGIN`](#stratos-pluginslink-plugin)
-   [`stratos plugins:uninstall PLUGIN...`](#stratos-pluginsuninstall-plugin)
-   [`stratos plugins update`](#stratos-plugins-update)

## `stratos help [COMMAND]`

Display help for stratos.

```
USAGE
  $ stratos help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for stratos.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `stratos plugins`

List installed plugins.

```
USAGE
  $ stratos plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ stratos plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `stratos plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ stratos plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ stratos plugins:inspect myplugin
```

## `stratos plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stratos plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ stratos plugins add

EXAMPLES
  $ stratos plugins:install myplugin

  $ stratos plugins:install https://github.com/someuser/someplugin

  $ stratos plugins:install someuser/someplugin
```

## `stratos plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ stratos plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ stratos plugins:link myplugin
```

## `stratos plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stratos plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stratos plugins unlink
  $ stratos plugins remove
```

## `stratos plugins update`

Update installed plugins.

```
USAGE
  $ stratos plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->
