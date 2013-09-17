# Development

Install Ruby using rbenv/ruby-build. Instructions for installing Ruby using
rbenv can be found here: https://github.com/sstephenson/rbenv

## Getting the development server up and running
```bash
$ gem install bundler
$ cd hoopla-landingpage
$ bundle install
$ rbenv rehash
$ middleman server
```

# Building & deploying

Create a `.s3_sync` file with the S3 credentials. An example of such a file can be
found here: https://raw.github.com/fredjean/middleman-s3_sync/master/.s3_sync.sample

By default the files will be uploaded to the staging bucket.

```bash
$ middleman build
$ middleman s3_sync
```

If you wish to upload the site to the to the production bucket you will have to
override the bucket name using the `--bucket` argument, like this:

```bash
$ middleman build
$ middleman s3_sync --bucket=www.hoopla.no
```