export = Compilation;
declare class Compilation {
    /**
     * Creates an instance of Compilation.
     * @param {Compiler} compiler the compiler which created the compilation
     * @param {CompilationParams} params the compilation parameters
     */
    constructor(compiler: Compiler, params: CompilationParams);
    _backCompat: boolean;
    hooks: Readonly<{
        /** @type {SyncHook<[Module]>} */
        buildModule: SyncHook<[Module]>;
        /** @type {SyncHook<[Module]>} */
        rebuildModule: SyncHook<[Module]>;
        /** @type {SyncHook<[Module, WebpackError]>} */
        failedModule: SyncHook<[Module, WebpackError]>;
        /** @type {SyncHook<[Module]>} */
        succeedModule: SyncHook<[Module]>;
        /** @type {SyncHook<[Module]>} */
        stillValidModule: SyncHook<[Module]>;
        /** @type {SyncHook<[Dependency, EntryOptions]>} */
        addEntry: SyncHook<[Dependency, EntryOptions]>;
        /** @type {SyncHook<[Dependency, EntryOptions, Error]>} */
        failedEntry: SyncHook<[Dependency, EntryOptions, Error]>;
        /** @type {SyncHook<[Dependency, EntryOptions, Module]>} */
        succeedEntry: SyncHook<[Dependency, EntryOptions, Module]>;
        /** @type {SyncWaterfallHook<[(string[] | ReferencedExport)[], Dependency, RuntimeSpec]>} */
        dependencyReferencedExports: SyncWaterfallHook<[(string[] | ReferencedExport)[], Dependency, RuntimeSpec]>;
        /** @type {SyncHook<[ExecuteModuleArgument, ExecuteModuleContext]>} */
        executeModule: SyncHook<[ExecuteModuleArgument, ExecuteModuleContext]>;
        /** @type {AsyncParallelHook<[ExecuteModuleArgument, ExecuteModuleContext]>} */
        prepareModuleExecution: AsyncParallelHook<[ExecuteModuleArgument, ExecuteModuleContext]>;
        /** @type {AsyncSeriesHook<[Iterable<Module>]>} */
        finishModules: AsyncSeriesHook<[Iterable<Module>]>;
        /** @type {AsyncSeriesHook<[Module]>} */
        finishRebuildingModule: AsyncSeriesHook<[Module]>;
        /** @type {SyncHook<[]>} */
        unseal: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        seal: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        beforeChunks: SyncHook<[]>;
        /**
         * The `afterChunks` hook is called directly after the chunks and module graph have
         * been created and before the chunks and modules have been optimized. This hook is useful to
         * inspect, analyze, and/or modify the chunk graph.
         * @type {SyncHook<[Iterable<Chunk>]>}
         */
        afterChunks: SyncHook<[Iterable<Chunk>]>;
        /** @type {SyncBailHook<[Iterable<Module>]>} */
        optimizeDependencies: SyncBailHook<[Iterable<Module>], any, import("tapable").UnsetAdditionalOptions>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        afterOptimizeDependencies: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[]>} */
        optimize: SyncHook<[]>;
        /** @type {SyncBailHook<[Iterable<Module>]>} */
        optimizeModules: SyncBailHook<[Iterable<Module>], any, import("tapable").UnsetAdditionalOptions>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        afterOptimizeModules: SyncHook<[Iterable<Module>]>;
        /** @type {SyncBailHook<[Iterable<Chunk>, ChunkGroup[]]>} */
        optimizeChunks: SyncBailHook<[Iterable<Chunk>, ChunkGroup[]], any, import("tapable").UnsetAdditionalOptions>;
        /** @type {SyncHook<[Iterable<Chunk>, ChunkGroup[]]>} */
        afterOptimizeChunks: SyncHook<[Iterable<Chunk>, ChunkGroup[]]>;
        /** @type {AsyncSeriesHook<[Iterable<Chunk>, Iterable<Module>]>} */
        optimizeTree: AsyncSeriesHook<[Iterable<Chunk>, Iterable<Module>]>;
        /** @type {SyncHook<[Iterable<Chunk>, Iterable<Module>]>} */
        afterOptimizeTree: SyncHook<[Iterable<Chunk>, Iterable<Module>]>;
        /** @type {AsyncSeriesBailHook<[Iterable<Chunk>, Iterable<Module>]>} */
        optimizeChunkModules: AsyncSeriesBailHook<[Iterable<Chunk>, Iterable<Module>], any, import("tapable").UnsetAdditionalOptions>;
        /** @type {SyncHook<[Iterable<Chunk>, Iterable<Module>]>} */
        afterOptimizeChunkModules: SyncHook<[Iterable<Chunk>, Iterable<Module>]>;
        /** @type {SyncBailHook<[], boolean | undefined>} */
        shouldRecord: SyncBailHook<[], boolean | undefined>;
        /** @type {SyncHook<[Chunk, Set<string>, RuntimeRequirementsContext]>} */
        additionalChunkRuntimeRequirements: SyncHook<[Chunk, Set<string>, RuntimeRequirementsContext]>;
        /** @type {HookMap<SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext]>>} */
        runtimeRequirementInChunk: HookMap<SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext], any, import("tapable").UnsetAdditionalOptions>>;
        /** @type {SyncHook<[Module, Set<string>, RuntimeRequirementsContext]>} */
        additionalModuleRuntimeRequirements: SyncHook<[Module, Set<string>, RuntimeRequirementsContext]>;
        /** @type {HookMap<SyncBailHook<[Module, Set<string>, RuntimeRequirementsContext]>>} */
        runtimeRequirementInModule: HookMap<SyncBailHook<[Module, Set<string>, RuntimeRequirementsContext], any, import("tapable").UnsetAdditionalOptions>>;
        /** @type {SyncHook<[Chunk, Set<string>, RuntimeRequirementsContext]>} */
        additionalTreeRuntimeRequirements: SyncHook<[Chunk, Set<string>, RuntimeRequirementsContext]>;
        /** @type {HookMap<SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext]>>} */
        runtimeRequirementInTree: HookMap<SyncBailHook<[Chunk, Set<string>, RuntimeRequirementsContext], any, import("tapable").UnsetAdditionalOptions>>;
        /** @type {SyncHook<[RuntimeModule, Chunk]>} */
        runtimeModule: SyncHook<[RuntimeModule, Chunk]>;
        /** @type {SyncHook<[Iterable<Module>, any]>} */
        reviveModules: SyncHook<[Iterable<Module>, any]>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        beforeModuleIds: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        moduleIds: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        optimizeModuleIds: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        afterOptimizeModuleIds: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[Iterable<Chunk>, any]>} */
        reviveChunks: SyncHook<[Iterable<Chunk>, any]>;
        /** @type {SyncHook<[Iterable<Chunk>]>} */
        beforeChunkIds: SyncHook<[Iterable<Chunk>]>;
        /** @type {SyncHook<[Iterable<Chunk>]>} */
        chunkIds: SyncHook<[Iterable<Chunk>]>;
        /** @type {SyncHook<[Iterable<Chunk>]>} */
        optimizeChunkIds: SyncHook<[Iterable<Chunk>]>;
        /** @type {SyncHook<[Iterable<Chunk>]>} */
        afterOptimizeChunkIds: SyncHook<[Iterable<Chunk>]>;
        /** @type {SyncHook<[Iterable<Module>, any]>} */
        recordModules: SyncHook<[Iterable<Module>, any]>;
        /** @type {SyncHook<[Iterable<Chunk>, any]>} */
        recordChunks: SyncHook<[Iterable<Chunk>, any]>;
        /** @type {SyncHook<[Iterable<Module>]>} */
        optimizeCodeGeneration: SyncHook<[Iterable<Module>]>;
        /** @type {SyncHook<[]>} */
        beforeModuleHash: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        afterModuleHash: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        beforeCodeGeneration: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        afterCodeGeneration: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        beforeRuntimeRequirements: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        afterRuntimeRequirements: SyncHook<[]>;
        /** @type {SyncHook<[]>} */
        beforeHash: SyncHook<[]>;
        /** @type {SyncHook<[Chunk]>} */
        contentHash: SyncHook<[Chunk]>;
        /** @type {SyncHook<[]>} */
        afterHash: SyncHook<[]>;
        /** @type {SyncHook<[any]>} */
        recordHash: SyncHook<[any]>;
        /** @type {SyncHook<[Compilation, any]>} */
        record: SyncHook<[Compilation, any]>;
        /** @type {SyncHook<[]>} */
        beforeModuleAssets: SyncHook<[]>;
        /** @type {SyncBailHook<[], boolean>} */
        shouldGenerateChunkAssets: SyncBailHook<[], boolean>;
        /** @type {SyncHook<[]>} */
        beforeChunkAssets: SyncHook<[]>;
        /** @deprecated */
        additionalChunkAssets: FakeHook<Pick<AsyncSeriesHook<[Set<Chunk>], import("tapable").UnsetAdditionalOptions>, "name" | "tap" | "tapAsync" | "tapPromise">>;
        /** @deprecated */
        additionalAssets: FakeHook<Pick<AsyncSeriesHook<[], import("tapable").UnsetAdditionalOptions>, "name" | "tap" | "tapAsync" | "tapPromise">>;
        /** @deprecated */
        optimizeChunkAssets: FakeHook<Pick<AsyncSeriesHook<[Set<Chunk>], import("tapable").UnsetAdditionalOptions>, "name" | "tap" | "tapAsync" | "tapPromise">>;
        /** @deprecated */
        afterOptimizeChunkAssets: FakeHook<Pick<AsyncSeriesHook<[Set<Chunk>], import("tapable").UnsetAdditionalOptions>, "name" | "tap" | "tapAsync" | "tapPromise">>;
        /** @deprecated */
        optimizeAssets: AsyncSeriesHook<[CompilationAssets], {
            additionalAssets?: true | Function;
        }>;
        /** @deprecated */
        afterOptimizeAssets: SyncHook<[CompilationAssets], void, import("tapable").UnsetAdditionalOptions>;
        processAssets: AsyncSeriesHook<[CompilationAssets], {
            additionalAssets?: true | Function;
        }>;
        afterProcessAssets: SyncHook<[CompilationAssets], void, import("tapable").UnsetAdditionalOptions>;
        /** @type {AsyncSeriesHook<[CompilationAssets]>} */
        processAdditionalAssets: AsyncSeriesHook<[CompilationAssets]>;
        /** @type {SyncBailHook<[], boolean>} */
        needAdditionalSeal: SyncBailHook<[], boolean>;
        /** @type {AsyncSeriesHook<[]>} */
        afterSeal: AsyncSeriesHook<[]>;
        /** @type {SyncWaterfallHook<[RenderManifestEntry[], RenderManifestOptions]>} */
        renderManifest: SyncWaterfallHook<[RenderManifestEntry[], RenderManifestOptions]>;
        /** @type {SyncHook<[Hash]>} */
        fullHash: SyncHook<[Hash]>;
        /** @type {SyncHook<[Chunk, Hash, ChunkHashContext]>} */
        chunkHash: SyncHook<[Chunk, Hash, ChunkHashContext]>;
        /** @type {SyncHook<[Module, string]>} */
        moduleAsset: SyncHook<[Module, string]>;
        /** @type {SyncHook<[Chunk, string]>} */
        chunkAsset: SyncHook<[Chunk, string]>;
        /** @type {SyncWaterfallHook<[string, object, AssetInfo]>} */
        assetPath: SyncWaterfallHook<[string, object, AssetInfo]>;
        /** @type {SyncBailHook<[], boolean>} */
        needAdditionalPass: SyncBailHook<[], boolean>;
        /** @type {SyncHook<[Compiler, string, number]>} */
        childCompiler: SyncHook<[Compiler, string, number]>;
        /** @type {SyncBailHook<[string, LogEntry], true>} */
        log: SyncBailHook<[string, LogEntry], true>;
        /** @type {SyncWaterfallHook<[WebpackError[]]>} */
        processWarnings: SyncWaterfallHook<[WebpackError[]]>;
        /** @type {SyncWaterfallHook<[WebpackError[]]>} */
        processErrors: SyncWaterfallHook<[WebpackError[]]>;
        /** @type {HookMap<SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>>} */
        statsPreset: HookMap<SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>>;
        /** @type {SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>} */
        statsNormalize: SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>;
        /** @type {SyncHook<[StatsFactory, NormalizedStatsOptions]>} */
        statsFactory: SyncHook<[StatsFactory, NormalizedStatsOptions]>;
        /** @type {SyncHook<[StatsPrinter, NormalizedStatsOptions]>} */
        statsPrinter: SyncHook<[StatsPrinter, NormalizedStatsOptions]>;
        readonly normalModuleLoader: SyncHook<[any, import("./NormalModule")], void, import("tapable").UnsetAdditionalOptions>;
    }>;
    /** @type {string=} */
    name: string | undefined;
    startTime: any;
    endTime: any;
    /** @type {Compiler} */
    compiler: Compiler;
    resolverFactory: import("./ResolverFactory");
    inputFileSystem: import("./util/fs").InputFileSystem;
    fileSystemInfo: FileSystemInfo;
    /** @type {Map<string, string | Set<string>>} */
    valueCacheVersions: Map<string, string | Set<string>>;
    requestShortener: import("./RequestShortener");
    compilerPath: string;
    logger: Logger;
    options: import("../declarations/WebpackOptions").WebpackOptionsNormalized;
    outputOptions: import("../declarations/WebpackOptions").OutputNormalized;
    /** @type {boolean} */
    bail: boolean;
    /** @type {boolean} */
    profile: boolean;
    params: import("./Compiler").CompilationParams;
    mainTemplate: MainTemplate;
    chunkTemplate: ChunkTemplate;
    runtimeTemplate: RuntimeTemplate;
    /** @type {{javascript: ModuleTemplate}} */
    moduleTemplates: {
        javascript: ModuleTemplate;
    };
    /** @type {Map<Module, WeakTupleMap<any, any>> | undefined} */
    moduleMemCaches: Map<Module, WeakTupleMap<any, any>> | undefined;
    /** @type {Map<Module, WeakTupleMap<any, any>> | undefined} */
    moduleMemCaches2: Map<Module, WeakTupleMap<any, any>> | undefined;
    moduleGraph: ModuleGraph;
    /** @type {ChunkGraph} */
    chunkGraph: ChunkGraph;
    /** @type {CodeGenerationResults} */
    codeGenerationResults: CodeGenerationResults;
    /** @type {AsyncQueue<Module, Module, Module>} */
    processDependenciesQueue: AsyncQueue<Module, Module, Module>;
    /** @type {AsyncQueue<Module, string, Module>} */
    addModuleQueue: AsyncQueue<Module, string, Module>;
    /** @type {AsyncQueue<FactorizeModuleOptions, string, Module | ModuleFactoryResult>} */
    factorizeQueue: AsyncQueue<FactorizeModuleOptions, string, Module | ModuleFactoryResult>;
    /** @type {AsyncQueue<Module, Module, Module>} */
    buildQueue: AsyncQueue<Module, Module, Module>;
    /** @type {AsyncQueue<Module, Module, Module>} */
    rebuildQueue: AsyncQueue<Module, Module, Module>;
    /**
     * Modules in value are building during the build of Module in key.
     * Means value blocking key from finishing.
     * Needed to detect build cycles.
     * @type {WeakMap<Module, Set<Module>>}
     */
    creatingModuleDuringBuild: WeakMap<Module, Set<Module>>;
    /** @type {Map<string, EntryData>} */
    entries: Map<string, EntryData>;
    /** @type {EntryData} */
    globalEntry: EntryData;
    /** @type {Map<string, Entrypoint>} */
    entrypoints: Map<string, Entrypoint>;
    /** @type {Entrypoint[]} */
    asyncEntrypoints: Entrypoint[];
    /** @type {Set<Chunk>} */
    chunks: Set<Chunk>;
    /** @type {ChunkGroup[]} */
    chunkGroups: ChunkGroup[];
    /** @type {Map<string, ChunkGroup>} */
    namedChunkGroups: Map<string, ChunkGroup>;
    /** @type {Map<string, Chunk>} */
    namedChunks: Map<string, Chunk>;
    /** @type {Set<Module>} */
    modules: Set<Module>;
    /** @private @type {Map<string, Module>} */
    private _modules;
    records: any;
    /** @type {string[]} */
    additionalChunkAssets: string[];
    /** @type {CompilationAssets} */
    assets: CompilationAssets;
    /** @type {Map<string, AssetInfo>} */
    assetsInfo: Map<string, AssetInfo>;
    /** @type {Map<string, Map<string, Set<string>>>} */
    _assetsRelatedIn: Map<string, Map<string, Set<string>>>;
    /** @type {WebpackError[]} */
    errors: WebpackError[];
    /** @type {WebpackError[]} */
    warnings: WebpackError[];
    /** @type {Compilation[]} */
    children: Compilation[];
    /** @type {Map<string, LogEntry[]>} */
    logging: Map<string, LogEntry[]>;
    /** @type {Map<DepConstructor, ModuleFactory>} */
    dependencyFactories: Map<DepConstructor, ModuleFactory>;
    /** @type {DependencyTemplates} */
    dependencyTemplates: DependencyTemplates;
    childrenCounters: {};
    /** @type {Set<number|string>} */
    usedChunkIds: Set<number | string>;
    /** @type {Set<number>} */
    usedModuleIds: Set<number>;
    /** @type {boolean} */
    needAdditionalPass: boolean;
    /** @type {Set<Module & { restoreFromUnsafeCache: Function }>} */
    _restoredUnsafeCacheModuleEntries: Set<Module & {
        restoreFromUnsafeCache: Function;
    }>;
    /** @type {Map<string, Module & { restoreFromUnsafeCache: Function }>} */
    _restoredUnsafeCacheEntries: Map<string, Module & {
        restoreFromUnsafeCache: Function;
    }>;
    /** @type {WeakSet<Module>} */
    builtModules: WeakSet<Module>;
    /** @type {WeakSet<Module>} */
    codeGeneratedModules: WeakSet<Module>;
    /** @type {WeakSet<Module>} */
    buildTimeExecutedModules: WeakSet<Module>;
    /** @private @type {Map<Module, Callback[]>} */
    private _rebuildingModules;
    /** @type {Set<string>} */
    emittedAssets: Set<string>;
    /** @type {Set<string>} */
    comparedForEmitAssets: Set<string>;
    /** @type {LazySet<string>} */
    fileDependencies: LazySet<string>;
    /** @type {LazySet<string>} */
    contextDependencies: LazySet<string>;
    /** @type {LazySet<string>} */
    missingDependencies: LazySet<string>;
    /** @type {LazySet<string>} */
    buildDependencies: LazySet<string>;
    compilationDependencies: {
        add: (item: any) => LazySet<string>;
    };
    _modulesCache: import("./CacheFacade");
    _assetsCache: import("./CacheFacade");
    _codeGenerationCache: import("./CacheFacade");
    _unsafeCache: boolean;
    _unsafeCachePredicate: Function;
    getStats(): Stats;
    /**
     * @param {StatsOptions | string} optionsOrPreset stats option value
     * @param {CreateStatsOptionsContext} context context
     * @returns {NormalizedStatsOptions} normalized options
     */
    createStatsOptions(optionsOrPreset: StatsOptions | string, context?: CreateStatsOptionsContext): NormalizedStatsOptions;
    createStatsFactory(options: any): StatsFactory;
    createStatsPrinter(options: any): StatsPrinter;
    /**
     * @param {string} name cache name
     * @returns {CacheFacade} the cache facade instance
     */
    getCache(name: string): CacheFacade;
    /**
     * @param {string | (function(): string)} name name of the logger, or function called once to get the logger name
     * @returns {Logger} a logger with that name
     */
    getLogger(name: string | (() => string)): Logger;
    /**
     * @param {Module} module module to be added that was created
     * @param {ModuleCallback} callback returns the module in the compilation,
     * it could be the passed one (if new), or an already existing in the compilation
     * @returns {void}
     */
    addModule(module: Module, callback: ModuleCallback): void;
    /**
     * @param {Module} module module to be added that was created
     * @param {ModuleCallback} callback returns the module in the compilation,
     * it could be the passed one (if new), or an already existing in the compilation
     * @returns {void}
     */
    _addModule(module: Module, callback: ModuleCallback): void;
    /**
     * Fetches a module from a compilation by its identifier
     * @param {Module} module the module provided
     * @returns {Module} the module requested
     */
    getModule(module: Module): Module;
    /**
     * Attempts to search for a module by its identifier
     * @param {string} identifier identifier (usually path) for module
     * @returns {Module|undefined} attempt to search for module and return it, else undefined
     */
    findModule(identifier: string): Module | undefined;
    /**
     * Schedules a build of the module object
     *
     * @param {Module} module module to be built
     * @param {ModuleCallback} callback the callback
     * @returns {void}
     */
    buildModule(module: Module, callback: ModuleCallback): void;
    /**
     * Builds the module object
     *
     * @param {Module} module module to be built
     * @param {ModuleCallback} callback the callback
     * @returns {void}
     */
    _buildModule(module: Module, callback: ModuleCallback): void;
    /**
     * @param {Module} module to be processed for deps
     * @param {ModuleCallback} callback callback to be triggered
     * @returns {void}
     */
    processModuleDependencies(module: Module, callback: ModuleCallback): void;
    /**
     * @param {Module} module to be processed for deps
     * @returns {void}
     */
    processModuleDependenciesNonRecursive(module: Module): void;
    /**
     * @param {Module} module to be processed for deps
     * @param {ModuleCallback} callback callback to be triggered
     * @returns {void}
     */
    _processModuleDependencies(module: Module, callback: ModuleCallback): void;
    _handleNewModuleFromUnsafeCache(originModule: any, dependency: any, module: any, callback: any): void;
    _handleExistingModuleFromUnsafeCache(originModule: any, dependency: any, module: any): void;
    /**
     * @typedef {Object} HandleModuleCreationOptions
     * @property {ModuleFactory} factory
     * @property {Dependency[]} dependencies
     * @property {Module | null} originModule
     * @property {Partial<ModuleFactoryCreateDataContextInfo>=} contextInfo
     * @property {string=} context
     * @property {boolean=} recursive recurse into dependencies of the created module
     * @property {boolean=} connectOrigin connect the resolved module with the origin module
     */
    /**
     * @param {HandleModuleCreationOptions} options options object
     * @param {ModuleCallback} callback callback
     * @returns {void}
     */
    handleModuleCreation({ factory, dependencies, originModule, contextInfo, context, recursive, connectOrigin }: {
        factory: ModuleFactory;
        dependencies: Dependency[];
        originModule: Module | null;
        contextInfo?: Partial<ModuleFactoryCreateDataContextInfo> | undefined;
        context?: string | undefined;
        /**
         * recurse into dependencies of the created module
         */
        recursive?: boolean | undefined;
        /**
         * connect the resolved module with the origin module
         */
        connectOrigin?: boolean | undefined;
    }, callback: ModuleCallback): void;
    _handleModuleBuildAndDependencies(originModule: any, module: any, recursive: any, callback: any): any;
    /**
     * @param {FactorizeModuleOptions} options options object
     * @param {ModuleOrFactoryResultCallback} callback callback
     * @returns {void}
     */
    _factorizeModule({ currentProfile, factory, dependencies, originModule, factoryResult, contextInfo, context }: FactorizeModuleOptions, callback: ModuleOrFactoryResultCallback): void;
    /**
     * @param {string} context context string path
     * @param {Dependency} dependency dependency used to create Module chain
     * @param {ModuleCallback} callback callback for when module chain is complete
     * @returns {void} will throw if dependency instance is not a valid Dependency
     */
    addModuleChain(context: string, dependency: Dependency, callback: ModuleCallback): void;
    /**
     * @param {Object} options options
     * @param {string} options.context context string path
     * @param {Dependency} options.dependency dependency used to create Module chain
     * @param {Partial<ModuleFactoryCreateDataContextInfo>=} options.contextInfo additional context info for the root module
     * @param {ModuleCallback} callback callback for when module chain is complete
     * @returns {void} will throw if dependency instance is not a valid Dependency
     */
    addModuleTree({ context, dependency, contextInfo }: {
        context: string;
        dependency: Dependency;
        contextInfo?: Partial<ModuleFactoryCreateDataContextInfo> | undefined;
    }, callback: ModuleCallback): void;
    /**
     * @param {string} context context path for entry
     * @param {Dependency} entry entry dependency that should be followed
     * @param {string | EntryOptions} optionsOrName options or deprecated name of entry
     * @param {ModuleCallback} callback callback function
     * @returns {void} returns
     */
    addEntry(context: string, entry: Dependency, optionsOrName: string | EntryOptions, callback: ModuleCallback): void;
    /**
     * @param {string} context context path for entry
     * @param {Dependency} dependency dependency that should be followed
     * @param {EntryOptions} options options
     * @param {ModuleCallback} callback callback function
     * @returns {void} returns
     */
    addInclude(context: string, dependency: Dependency, options: EntryOptions, callback: ModuleCallback): void;
    /**
     * @param {string} context context path for entry
     * @param {Dependency} entry entry dependency that should be followed
     * @param {"dependencies" | "includeDependencies"} target type of entry
     * @param {EntryOptions} options options
     * @param {ModuleCallback} callback callback function
     * @returns {void} returns
     */
    _addEntryItem(context: string, entry: Dependency, target: "dependencies" | "includeDependencies", options: EntryOptions, callback: ModuleCallback): void;
    /**
     * @param {Module} module module to be rebuilt
     * @param {ModuleCallback} callback callback when module finishes rebuilding
     * @returns {void}
     */
    rebuildModule(module: Module, callback: ModuleCallback): void;
    /**
     * @param {Module} module module to be rebuilt
     * @param {ModuleCallback} callback callback when module finishes rebuilding
     * @returns {void}
     */
    _rebuildModule(module: Module, callback: ModuleCallback): void;
    _computeAffectedModules(modules: any): void;
    _computeAffectedModulesWithChunkGraph(): void;
    finish(callback: any): void;
    unseal(): void;
    /**
     * @param {Callback} callback signals when the call finishes
     * @returns {void}
     */
    seal(callback: Callback): void;
    /**
     * @param {Module} module module to report from
     * @param {DependenciesBlock[]} blocks blocks to report from
     * @returns {boolean} true, when it has warnings or errors
     */
    reportDependencyErrorsAndWarnings(module: Module, blocks: DependenciesBlock[]): boolean;
    codeGeneration(callback: any): void;
    _runCodeGenerationJobs(jobs: any, callback: any): any;
    /**
     * @param {Module} module module
     * @param {RuntimeSpec} runtime runtime
     * @param {RuntimeSpec[]} runtimes runtimes
     * @param {string} hash hash
     * @param {DependencyTemplates} dependencyTemplates dependencyTemplates
     * @param {ChunkGraph} chunkGraph chunkGraph
     * @param {ModuleGraph} moduleGraph moduleGraph
     * @param {RuntimeTemplate} runtimeTemplate runtimeTemplate
     * @param {WebpackError[]} errors errors
     * @param {CodeGenerationResults} results results
     * @param {function((WebpackError | null)=, boolean=): void} callback callback
     */
    _codeGenerationModule(module: Module, runtime: RuntimeSpec, runtimes: RuntimeSpec[], hash: string, dependencyTemplates: DependencyTemplates, chunkGraph: ChunkGraph, moduleGraph: ModuleGraph, runtimeTemplate: RuntimeTemplate, errors: WebpackError[], results: CodeGenerationResults, callback: (arg0?: (WebpackError | null) | undefined, arg1?: boolean | undefined) => void): void;
    _getChunkGraphEntries(): Set<Chunk>;
    /**
     * @param {Object} options options
     * @param {ChunkGraph=} options.chunkGraph the chunk graph
     * @param {Iterable<Module>=} options.modules modules
     * @param {Iterable<Chunk>=} options.chunks chunks
     * @param {CodeGenerationResults=} options.codeGenerationResults codeGenerationResults
     * @param {Iterable<Chunk>=} options.chunkGraphEntries chunkGraphEntries
     * @returns {void}
     */
    processRuntimeRequirements({ chunkGraph, modules, chunks, codeGenerationResults, chunkGraphEntries }?: {
        chunkGraph?: ChunkGraph | undefined;
        modules?: Iterable<Module> | undefined;
        chunks?: Iterable<Chunk> | undefined;
        codeGenerationResults?: CodeGenerationResults | undefined;
        chunkGraphEntries?: Iterable<Chunk> | undefined;
    }): void;
    /**
     * @param {Chunk} chunk target chunk
     * @param {RuntimeModule} module runtime module
     * @param {ChunkGraph} chunkGraph the chunk graph
     * @returns {void}
     */
    addRuntimeModule(chunk: Chunk, module: RuntimeModule, chunkGraph?: ChunkGraph): void;
    /**
     * If `module` is passed, `loc` and `request` must also be passed.
     * @param {string | ChunkGroupOptions} groupOptions options for the chunk group
     * @param {Module=} module the module the references the chunk group
     * @param {DependencyLocation=} loc the location from with the chunk group is referenced (inside of module)
     * @param {string=} request the request from which the the chunk group is referenced
     * @returns {ChunkGroup} the new or existing chunk group
     */
    addChunkInGroup(groupOptions: string | ChunkGroupOptions, module?: Module | undefined, loc?: DependencyLocation | undefined, request?: string | undefined): ChunkGroup;
    /**
     * @param {EntryOptions} options options for the entrypoint
     * @param {Module} module the module the references the chunk group
     * @param {DependencyLocation} loc the location from with the chunk group is referenced (inside of module)
     * @param {string} request the request from which the the chunk group is referenced
     * @returns {Entrypoint} the new or existing entrypoint
     */
    addAsyncEntrypoint(options: EntryOptions, module: Module, loc: DependencyLocation, request: string): Entrypoint;
    /**
     * This method first looks to see if a name is provided for a new chunk,
     * and first looks to see if any named chunks already exist and reuse that chunk instead.
     *
     * @param {string=} name optional chunk name to be provided
     * @returns {Chunk} create a chunk (invoked during seal event)
     */
    addChunk(name?: string | undefined): Chunk;
    /**
     * @deprecated
     * @param {Module} module module to assign depth
     * @returns {void}
     */
    assignDepth(module: Module): void;
    /**
     * @param {Set<Module>} modules module to assign depth
     * @returns {void}
     */
    assignDepths(modules: Set<Module>): void;
    /**
     * @param {Dependency} dependency the dependency
     * @param {RuntimeSpec} runtime the runtime
     * @returns {(string[] | ReferencedExport)[]} referenced exports
     */
    getDependencyReferencedExports(dependency: Dependency, runtime: RuntimeSpec): (string[] | ReferencedExport)[];
    /**
     *
     * @param {Module} module module relationship for removal
     * @param {DependenciesBlockLike} block //TODO: good description
     * @returns {void}
     */
    removeReasonsOfDependencyBlock(module: Module, block: DependenciesBlockLike): void;
    /**
     * @param {Module} module module to patch tie
     * @param {Chunk} chunk chunk to patch tie
     * @returns {void}
     */
    patchChunksAfterReasonRemoval(module: Module, chunk: Chunk): void;
    /**
     *
     * @param {DependenciesBlock} block block tie for Chunk
     * @param {Chunk} chunk chunk to remove from dep
     * @returns {void}
     */
    removeChunkFromDependencies(block: DependenciesBlock, chunk: Chunk): void;
    assignRuntimeIds(): void;
    sortItemsWithChunkIds(): void;
    summarizeDependencies(): void;
    createModuleHashes(): void;
    _createModuleHash(module: any, chunkGraph: any, runtime: any, hashFunction: any, runtimeTemplate: any, hashDigest: any, hashDigestLength: any, errors: any): string;
    createHash(): {
        module: Module;
        hash: string;
        runtime: RuntimeSpec;
        runtimes: RuntimeSpec[];
    }[];
    fullHash: string;
    hash: string;
    /**
     * @param {string} file file name
     * @param {Source} source asset source
     * @param {AssetInfo} assetInfo extra asset information
     * @returns {void}
     */
    emitAsset(file: string, source: any, assetInfo?: AssetInfo): void;
    _setAssetInfo(file: any, newInfo: any, oldInfo?: AssetInfo): void;
    /**
     * @param {string} file file name
     * @param {Source | function(Source): Source} newSourceOrFunction new asset source or function converting old to new
     * @param {AssetInfo | function(AssetInfo | undefined): AssetInfo} assetInfoUpdateOrFunction new asset info or function converting old to new
     */
    updateAsset(file: string, newSourceOrFunction: Source | ((arg0: Source) => Source), assetInfoUpdateOrFunction?: AssetInfo | ((arg0: AssetInfo | undefined) => AssetInfo)): void;
    renameAsset(file: any, newFile: any): void;
    /**
     * @param {string} file file name
     */
    deleteAsset(file: string): void;
    getAssets(): Readonly<Asset>[];
    /**
     * @param {string} name the name of the asset
     * @returns {Readonly<Asset> | undefined} the asset or undefined when not found
     */
    getAsset(name: string): Readonly<Asset> | undefined;
    clearAssets(): void;
    createModuleAssets(): void;
    /**
     * @param {RenderManifestOptions} options options object
     * @returns {RenderManifestEntry[]} manifest entries
     */
    getRenderManifest(options: RenderManifestOptions): RenderManifestEntry[];
    /**
     * @param {Callback} callback signals when the call finishes
     * @returns {void}
     */
    createChunkAssets(callback: Callback): void;
    /**
     * @param {string | function(PathData, AssetInfo=): string} filename used to get asset path with hash
     * @param {PathData} data context data
     * @returns {string} interpolated path
     */
    getPath(filename: string | ((arg0: PathData, arg1?: AssetInfo | undefined) => string), data?: PathData): string;
    /**
     * @param {string | function(PathData, AssetInfo=): string} filename used to get asset path with hash
     * @param {PathData} data context data
     * @returns {{ path: string, info: AssetInfo }} interpolated path and asset info
     */
    getPathWithInfo(filename: string | ((arg0: PathData, arg1?: AssetInfo | undefined) => string), data?: PathData): {
        path: string;
        info: AssetInfo;
    };
    /**
     * @param {string | function(PathData, AssetInfo=): string} filename used to get asset path with hash
     * @param {PathData} data context data
     * @returns {string} interpolated path
     */
    getAssetPath(filename: string | ((arg0: PathData, arg1?: AssetInfo | undefined) => string), data: PathData): string;
    /**
     * @param {string | function(PathData, AssetInfo=): string} filename used to get asset path with hash
     * @param {PathData} data context data
     * @returns {{ path: string, info: AssetInfo }} interpolated path and asset info
     */
    getAssetPathWithInfo(filename: string | ((arg0: PathData, arg1?: AssetInfo | undefined) => string), data: PathData): {
        path: string;
        info: AssetInfo;
    };
    getWarnings(): WebpackError[];
    getErrors(): WebpackError[];
    /**
     * This function allows you to run another instance of webpack inside of webpack however as
     * a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
     * from parent (or top level compiler) and creates a child Compilation
     *
     * @param {string} name name of the child compiler
     * @param {OutputOptions=} outputOptions // Need to convert config schema to types for this
     * @param {Array<WebpackPluginInstance | WebpackPluginFunction>=} plugins webpack plugins that will be applied
     * @returns {Compiler} creates a child Compiler instance
     */
    createChildCompiler(name: string, outputOptions?: OutputOptions | undefined, plugins?: Array<WebpackPluginInstance | WebpackPluginFunction> | undefined): Compiler;
    /**
     * @param {Module} module the module
     * @param {ExecuteModuleOptions} options options
     * @param {ExecuteModuleCallback} callback callback
     */
    executeModule(module: Module, options: ExecuteModuleOptions, callback: ExecuteModuleCallback): void;
    checkConstraints(): void;
    /**
     * @typedef {Object} FactorizeModuleOptions
     * @property {ModuleProfile} currentProfile
     * @property {ModuleFactory} factory
     * @property {Dependency[]} dependencies
     * @property {boolean=} factoryResult return full ModuleFactoryResult instead of only module
     * @property {Module | null} originModule
     * @property {Partial<ModuleFactoryCreateDataContextInfo>=} contextInfo
     * @property {string=} context
     */
    /**
     * @param {FactorizeModuleOptions} options options object
     * @param {ModuleCallback | ModuleFactoryResultCallback} callback callback
     * @returns {void}
     */
    factorizeModule: {
        (options: FactorizeModuleOptions & {
            factoryResult?: false;
        }, callback: ModuleCallback): void;
        (options: FactorizeModuleOptions & {
            factoryResult: true;
        }, callback: ModuleFactoryResultCallback): void;
    };
}
declare namespace Compilation {
    export { PROCESS_ASSETS_STAGE_ADDITIONAL, PROCESS_ASSETS_STAGE_PRE_PROCESS, PROCESS_ASSETS_STAGE_DERIVED, PROCESS_ASSETS_STAGE_ADDITIONS, PROCESS_ASSETS_STAGE_OPTIMIZE, PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT, PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY, PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE, PROCESS_ASSETS_STAGE_DEV_TOOLING, PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE, PROCESS_ASSETS_STAGE_SUMMARIZE, PROCESS_ASSETS_STAGE_OPTIMIZE_HASH, PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER, PROCESS_ASSETS_STAGE_ANALYSE, PROCESS_ASSETS_STAGE_REPORT, AsArray, Source, EntryDescription, OutputOptions, StatsOptions, WebpackPluginFunction, WebpackPluginInstance, AsyncDependenciesBlock, Cache, CacheFacade, ChunkGroupOptions, Compiler, CompilationParams, DependenciesBlock, DependencyLocation, ReferencedExport, DependencyTemplate, EntryOptions, CodeGenerationResult, ModuleFactory, ModuleFactoryCreateDataContextInfo, ModuleFactoryResult, RequestShortener, RuntimeModule, RenderManifestEntry, RenderManifestOptions, StatsAsset, StatsError, StatsModule, Hash, FakeHook, RuntimeSpec, Callback, ModuleCallback, ModuleFactoryResultCallback, ModuleOrFactoryResultCallback, ExecuteModuleCallback, DepBlockVarDependenciesCallback, DepConstructor, CompilationAssets, AvailableModulesChunkGroupMapping, DependenciesBlockLike, ChunkPathData, ChunkHashContext, RuntimeRequirementsContext, ExecuteModuleOptions, ExecuteModuleResult, ExecuteModuleArgument, ExecuteModuleContext, EntryData, LogEntry, KnownAssetInfo, AssetInfo, Asset, ModulePathData, PathData, KnownNormalizedStatsOptions, NormalizedStatsOptions, KnownCreateStatsOptionsContext, CreateStatsOptionsContext, FactorizeModuleOptions };
}
import { SyncHook } from "tapable";
import Module = require("./Module");
import WebpackError = require("./WebpackError");
import Dependency = require("./Dependency");
type EntryOptions = import("./Entrypoint").EntryOptions;
import { SyncWaterfallHook } from "tapable";
type ReferencedExport = import("./Dependency").ReferencedExport;
type RuntimeSpec = import("./util/runtime").RuntimeSpec;
type ExecuteModuleArgument = {
    module: Module;
    moduleObject?: {
        id: string;
        exports: any;
        loaded: boolean;
    };
    preparedInfo: any;
    codeGenerationResult: CodeGenerationResult;
};
type ExecuteModuleContext = {
    assets: Map<string, {
        source: Source;
        info: AssetInfo;
    }>;
    chunk: Chunk;
    chunkGraph: ChunkGraph;
    __webpack_require__?: ((arg0: string) => any) | undefined;
};
import { AsyncParallelHook } from "tapable";
import { AsyncSeriesHook } from "tapable";
import Chunk = require("./Chunk");
import { SyncBailHook } from "tapable";
import ChunkGroup = require("./ChunkGroup");
import { AsyncSeriesBailHook } from "tapable";
type RuntimeRequirementsContext = {
    /**
     * the chunk graph
     */
    chunkGraph: ChunkGraph;
    /**
     * the code generation results
     */
    codeGenerationResults: CodeGenerationResults;
};
import { HookMap } from "tapable";
type RuntimeModule = import("./RuntimeModule");
/**
 * <T>
 */
type FakeHook<T> = import("./util/deprecation").FakeHook<T>;
type CompilationAssets = Record<string, Source>;
type RenderManifestEntry = import("./Template").RenderManifestEntry;
type RenderManifestOptions = import("./Template").RenderManifestOptions;
type Hash = import("./util/Hash");
type ChunkHashContext = {
    /**
     * results of code generation
     */
    codeGenerationResults: CodeGenerationResults;
    /**
     * the runtime template
     */
    runtimeTemplate: RuntimeTemplate;
    /**
     * the module graph
     */
    moduleGraph: ModuleGraph;
    /**
     * the chunk graph
     */
    chunkGraph: ChunkGraph;
};
type AssetInfo = KnownAssetInfo & Record<string, any>;
type Compiler = import("./Compiler");
type LogEntry = {
    type: string;
    args: any[];
    time: number;
    trace?: string[] | undefined;
};
type NormalizedStatsOptions = KnownNormalizedStatsOptions & Omit<StatsOptions, keyof KnownNormalizedStatsOptions> & Record<string, any>;
type CreateStatsOptionsContext = KnownCreateStatsOptionsContext & Record<string, any>;
import StatsFactory = require("./stats/StatsFactory");
import StatsPrinter = require("./stats/StatsPrinter");
import FileSystemInfo = require("./FileSystemInfo");
import { Logger } from "./logging/Logger";
import MainTemplate = require("./MainTemplate");
import ChunkTemplate = require("./ChunkTemplate");
import RuntimeTemplate = require("./RuntimeTemplate");
import ModuleTemplate = require("./ModuleTemplate");
import WeakTupleMap = require("./util/WeakTupleMap");
import ModuleGraph = require("./ModuleGraph");
import ChunkGraph = require("./ChunkGraph");
import CodeGenerationResults = require("./CodeGenerationResults");
import AsyncQueue = require("./util/AsyncQueue");
type FactorizeModuleOptions = {
    currentProfile: ModuleProfile;
    factory: ModuleFactory;
    dependencies: Dependency[];
    /**
     * return full ModuleFactoryResult instead of only module
     */
    factoryResult?: boolean | undefined;
    originModule: Module | null;
    contextInfo?: Partial<ModuleFactoryCreateDataContextInfo> | undefined;
    context?: string | undefined;
};
type ModuleFactoryResult = import("./ModuleFactory").ModuleFactoryResult;
type EntryData = {
    /**
     * dependencies of the entrypoint that should be evaluated at startup
     */
    dependencies: Dependency[];
    /**
     * dependencies of the entrypoint that should be included but not evaluated
     */
    includeDependencies: Dependency[];
    /**
     * options of the entrypoint
     */
    options: EntryOptions;
};
import Entrypoint = require("./Entrypoint");
type DepConstructor = new (...args: any[]) => Dependency;
type ModuleFactory = import("./ModuleFactory");
import DependencyTemplates = require("./DependencyTemplates");
import LazySet = require("./util/LazySet");
import Stats = require("./Stats");
type StatsOptions = import("../declarations/WebpackOptions").StatsOptions;
type CacheFacade = import("./CacheFacade");
type ModuleCallback = (err?: (WebpackError | null) | undefined, result?: Module | undefined) => void;
type ModuleFactoryCreateDataContextInfo = import("./ModuleFactory").ModuleFactoryCreateDataContextInfo;
type ModuleOrFactoryResultCallback = (err?: (WebpackError | null) | undefined, result?: (Module | ModuleFactoryResult) | undefined) => void;
type Callback = (err?: (WebpackError | null) | undefined) => void;
type DependenciesBlock = import("./DependenciesBlock");
type ChunkGroupOptions = import("./ChunkGroup").ChunkGroupOptions;
type DependencyLocation = import("./Dependency").DependencyLocation;
type DependenciesBlockLike = {
    dependencies: Dependency[];
    blocks: AsyncDependenciesBlock[];
};
type Source = any;
type Asset = {
    /**
     * the filename of the asset
     */
    name: string;
    /**
     * source of the asset
     */
    source: any;
    /**
     * info about the asset
     */
    info: AssetInfo;
};
type PathData = {
    chunkGraph?: ChunkGraph | undefined;
    hash?: string | undefined;
    hashWithLength?: ((arg0: number) => string) | undefined;
    chunk?: (Chunk | ChunkPathData) | undefined;
    module?: (Module | ModulePathData) | undefined;
    runtime?: RuntimeSpec | undefined;
    filename?: string | undefined;
    basename?: string | undefined;
    query?: string | undefined;
    contentHashType?: string | undefined;
    contentHash?: string | undefined;
    contentHashWithLength?: ((arg0: number) => string) | undefined;
    noChunkHash?: boolean | undefined;
    url?: string | undefined;
};
type OutputOptions = import("../declarations/WebpackOptions").OutputNormalized;
type WebpackPluginInstance = import("../declarations/WebpackOptions").WebpackPluginInstance;
type WebpackPluginFunction = import("../declarations/WebpackOptions").WebpackPluginFunction;
type ExecuteModuleOptions = {
    entryOptions?: EntryOptions | undefined;
};
type ExecuteModuleCallback = (err?: (WebpackError | null) | undefined, result?: ExecuteModuleResult | undefined) => void;
type ModuleFactoryResultCallback = (err?: (WebpackError | null) | undefined, result?: ModuleFactoryResult | undefined) => void;
type CompilationParams = import("./Compiler").CompilationParams;
declare var PROCESS_ASSETS_STAGE_ADDITIONAL: number;
declare var PROCESS_ASSETS_STAGE_PRE_PROCESS: number;
declare var PROCESS_ASSETS_STAGE_DERIVED: number;
declare var PROCESS_ASSETS_STAGE_ADDITIONS: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE: number;
declare var PROCESS_ASSETS_STAGE_DEV_TOOLING: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE: number;
declare var PROCESS_ASSETS_STAGE_SUMMARIZE: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_HASH: number;
declare var PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER: number;
declare var PROCESS_ASSETS_STAGE_ANALYSE: number;
declare var PROCESS_ASSETS_STAGE_REPORT: number;
/**
 * <T>
 */
type AsArray<T> = import("tapable").AsArray<T>;
type EntryDescription = import("../declarations/WebpackOptions").EntryDescriptionNormalized;
type AsyncDependenciesBlock = import("./AsyncDependenciesBlock");
type Cache = import("./Cache");
type DependencyTemplate = import("./DependencyTemplate");
type CodeGenerationResult = import("./Module").CodeGenerationResult;
type RequestShortener = import("./RequestShortener");
type StatsAsset = import("./stats/DefaultStatsFactoryPlugin").StatsAsset;
type StatsError = import("./stats/DefaultStatsFactoryPlugin").StatsError;
type StatsModule = import("./stats/DefaultStatsFactoryPlugin").StatsModule;
type DepBlockVarDependenciesCallback = (dependency: Dependency) => any;
type AvailableModulesChunkGroupMapping = {
    chunkGroup: ChunkGroup;
    availableModules: Set<Module>;
    needCopy: boolean;
};
type ChunkPathData = {
    id: string | number;
    name?: string | undefined;
    hash: string;
    hashWithLength?: ((arg0: number) => string) | undefined;
    contentHash?: (Record<string, string>) | undefined;
    contentHashWithLength?: Record<string, (length: number) => string>;
};
type ExecuteModuleResult = {
    exports: any;
    cacheable: boolean;
    assets: Map<string, {
        source: Source;
        info: AssetInfo;
    }>;
    fileDependencies: LazySet<string>;
    contextDependencies: LazySet<string>;
    missingDependencies: LazySet<string>;
    buildDependencies: LazySet<string>;
};
type KnownAssetInfo = {
    /**
     * true, if the asset can be long term cached forever (contains a hash)
     */
    immutable?: boolean | undefined;
    /**
     * whether the asset is minimized
     */
    minimized?: boolean | undefined;
    /**
     * the value(s) of the full hash used for this asset
     */
    fullhash?: (string | string[]) | undefined;
    /**
     * the value(s) of the chunk hash used for this asset
     */
    chunkhash?: (string | string[]) | undefined;
    /**
     * the value(s) of the module hash used for this asset
     */
    modulehash?: (string | string[]) | undefined;
    /**
     * the value(s) of the content hash used for this asset
     */
    contenthash?: (string | string[]) | undefined;
    /**
     * when asset was created from a source file (potentially transformed), the original filename relative to compilation context
     */
    sourceFilename?: string | undefined;
    /**
     * size in bytes, only set after asset has been emitted
     */
    size?: number | undefined;
    /**
     * true, when asset is only used for development and doesn't count towards user-facing assets
     */
    development?: boolean | undefined;
    /**
     * true, when asset ships data for updating an existing application (HMR)
     */
    hotModuleReplacement?: boolean | undefined;
    /**
     * true, when asset is javascript and an ESM
     */
    javascriptModule?: boolean | undefined;
    /**
     * object of pointers to other assets, keyed by type of relation (only points from parent to child)
     */
    related?: Record<string, string | string[]> | undefined;
};
type ModulePathData = {
    id: string | number;
    hash: string;
    hashWithLength?: ((arg0: number) => string) | undefined;
};
type KnownNormalizedStatsOptions = {
    context: string;
    requestShortener: RequestShortener;
    chunksSort: string;
    modulesSort: string;
    chunkModulesSort: string;
    nestedModulesSort: string;
    assetsSort: string;
    ids: boolean;
    cachedAssets: boolean;
    groupAssetsByEmitStatus: boolean;
    groupAssetsByPath: boolean;
    groupAssetsByExtension: boolean;
    assetsSpace: number;
    excludeAssets: ((value: string, asset: StatsAsset) => boolean)[];
    excludeModules: ((name: string, module: StatsModule, type: "module" | "chunk" | "root-of-chunk" | "nested") => boolean)[];
    warningsFilter: ((warning: StatsError, textValue: string) => boolean)[];
    cachedModules: boolean;
    orphanModules: boolean;
    dependentModules: boolean;
    runtimeModules: boolean;
    groupModulesByCacheStatus: boolean;
    groupModulesByLayer: boolean;
    groupModulesByAttributes: boolean;
    groupModulesByPath: boolean;
    groupModulesByExtension: boolean;
    groupModulesByType: boolean;
    entrypoints: boolean | "auto";
    chunkGroups: boolean;
    chunkGroupAuxiliary: boolean;
    chunkGroupChildren: boolean;
    chunkGroupMaxAssets: number;
    modulesSpace: number;
    chunkModulesSpace: number;
    nestedModulesSpace: number;
    logging: false | "none" | "error" | "warn" | "info" | "log" | "verbose";
    loggingDebug: ((value: string) => boolean)[];
    loggingTrace: boolean;
    _env: any;
};
type KnownCreateStatsOptionsContext = {
    forToString?: boolean | undefined;
};
import ModuleProfile = require("./ModuleProfile");
