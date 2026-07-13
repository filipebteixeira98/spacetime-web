import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'

import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const rocketseatReact = compat
  .extends('@rocketseat/eslint-config/react')
  .map((config) => {
    if (!config.plugins) {
      return config
    }

    const plugins = { ...config.plugins }

    delete plugins.react
    delete plugins['react-hooks']
    delete plugins['jsx-a11y']
    delete plugins['@typescript-eslint']

    return {
      ...config,
      plugins,
    }
  })

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...rocketseatReact,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
