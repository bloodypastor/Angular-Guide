constructor(@Optional() config: UserServiceConfig) {
  if (config) { this._userName = config.userName; }
}
