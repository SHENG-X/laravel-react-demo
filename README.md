## Setup React Project in Laravel

### Step 1:
  Initialize project in composer

  ```composer create-project --prefer-dist laravel/laravel blog```

### Step 2:
  Require ui project

  ```composer require laravel/ui```

### Step 3:
  Require ui project

  ```composer require laravel/ui```

### Step 4:
  Use react ui in the project

  ```php artisan ui react```

### Step 5:
  Install npm packages

  ```npm install```

### Step 6:
  Start and build the ui project

  ```npm run dev```
  ```php artisan server```

## Render React Component On the Page
  ```See views/welcome.blade.php```

  ```resources/cool/app.js```

  ```webpack.mix.js```

## Ignore Auto Generated files in Public Folder
  ```
  public
  !public/.htaccess
  !public/.favicon.ico
  !public/index.php
  !public/robots.txt
  !public/web.config
```