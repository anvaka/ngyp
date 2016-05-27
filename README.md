# ngyp

Plain gyp distribution on npm. This project does not alter [original gyp](https://chromium.googlesource.com/external/gyp)
in any way. The main purpose of this repository is to allow developers
to install and play with gyp quickly.

# usage

Make sure you have python installed and available in your PATH.

```
npm install -g ngyp
```

Once project is installed, you can start generating your projects. By default
`ngyp` command will forward all arguments to gyp_main:

```
> ngyp
gyp: usage: gyp_main.py [options ...] [build_file ...]

gyp_main.py: error: no build_file
```

# hello world with gyp

Let's say we have the following files:

``` cpp
// main.cc - our main c++ file
#include <iostream>

int main()
{
  std::cout << "Hello World!" << std::endl;
}
```

In the same folder we have a gyp folder, which defines how to generate project
file for this C++ code:

``` json
{
  "targets": [
    {
      "target_name": "hello-world",
      "type": "executable",
      "sources": [
        "main.cc"
      ]
    }
  ]
}
```

To generate a make file that compiles this project:

```
ngyp main.gyp --depth=. -f make --generator-output=build
```

This will create a `build` folder, where we can run `make` and get our code compiled:

```
> cd build && make
  CXX(target) out/Default/obj.target/hello-world/main.o
  LINK(target) out/Default/hello-world

> ./out/Default/hello-world
Hello World!
```

# license

This module is distributed under MIT license. gyp license can be found in
[official repository](https://chromium.googlesource.com/external/gyp/+/master/LICENSE)
