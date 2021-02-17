declare namespace TaskTrackingAppCom {
    /**
     * projectDetails
     * example:
     * {
     *   "id": 123,
     *   "name": "Sample Project 1",
     *   "tasks": [
     *     {
     *       "id": 321,
     *       "name": "Sample Task 1",
     *       "status": "NOT_STARTED"
     *     },
     *     {
     *       "id": 321,
     *       "name": "Sample Task 2",
     *       "status": "IN_PROGRESS"
     *     },
     *     {
     *       "id": 321,
     *       "name": "Sample Task 3",
     *       "status": "COMPLETED"
     *     }
     *   ]
     * }
     */
    export interface ProjectDetailsJson {
        /**
         * The id schema
         * example:
         * 123
         */
        id: number;
        /**
         * The name schema
         * example:
         * Sample Project 1
         */
        name: string;
        /**
         * The tasks schema
         * example:
         * [
         *   {
         *     "id": 321,
         *     "name": "Sample Task 1",
         *     "status": "NOT_STARTED"
         *   },
         *   {
         *     "id": 321,
         *     "name": "Sample Task 2",
         *     "status": "IN_PROGRESS"
         *   }
         * ]
         */
        tasks: ({
            /**
             * The id schema
             * example:
             * 321
             */
            id: number;
            /**
             * The name schema
             * example:
             * Sample Task 1
             */
            name: string;
            /**
             * The status schema
             * example:
             * NOT_STARTED
             */
            status: string;
        })[];
    }
    namespace ProjectDetailsJson {
        namespace Properties {
            /**
             * The id schema
             * example:
             * 123
             */
            export type Id = number;
            /**
             * The name schema
             * example:
             * Sample Project 1
             */
            export type Name = string;
            /**
             * The tasks schema
             * example:
             * [
             *   {
             *     "id": 321,
             *     "name": "Sample Task 1",
             *     "status": "NOT_STARTED"
             *   },
             *   {
             *     "id": 321,
             *     "name": "Sample Task 2",
             *     "status": "IN_PROGRESS"
             *   }
             * ]
             */
            export type Tasks = ({
                /**
                 * The id schema
                 * example:
                 * 321
                 */
                id: number;
                /**
                 * The name schema
                 * example:
                 * Sample Task 1
                 */
                name: string;
                /**
                 * The status schema
                 * example:
                 * NOT_STARTED
                 */
                status: string;
            })[];
            namespace Tasks {
                export type Items = {
                    /**
                     * The id schema
                     * example:
                     * 321
                     */
                    id: number;
                    /**
                     * The name schema
                     * example:
                     * Sample Task 1
                     */
                    name: string;
                    /**
                     * The status schema
                     * example:
                     * NOT_STARTED
                     */
                    status: string;
                };
                namespace Items {
                    namespace AnyOf {
                        /**
                         * The first anyOf schema
                         * example:
                         * {
                         *   "id": 321,
                         *   "name": "Sample Task 1",
                         *   "status": "NOT_STARTED"
                         * }
                         */
                        export interface $0 {
                            /**
                             * The id schema
                             * example:
                             * 321
                             */
                            id: number;
                            /**
                             * The name schema
                             * example:
                             * Sample Task 1
                             */
                            name: string;
                            /**
                             * The status schema
                             * example:
                             * NOT_STARTED
                             */
                            status: string;
                        }
                        namespace $0 {
                            namespace Properties {
                                /**
                                 * The id schema
                                 * example:
                                 * 321
                                 */
                                export type Id = number;
                                /**
                                 * The name schema
                                 * example:
                                 * Sample Task 1
                                 */
                                export type Name = string;
                                /**
                                 * The status schema
                                 * example:
                                 * NOT_STARTED
                                 */
                                export type Status = string;
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * projectsList
     * example:
     * [
     *   {
     *     "id": 123,
     *     "name": "Sample Project 1",
     *     "tasksCompleted": 3,
     *     "tasksTotal": 3
     *   },
     *   {
     *     "id": 124,
     *     "name": "Sample Project 2",
     *     "tasksCompleted": 1,
     *     "tasksTotal": 1
     *   }
     * ]
     */
    export type ProjectsListJson = ({
        /**
         * The id schema
         * example:
         * 123
         */
        id: number;
        /**
         * The name schema
         * example:
         * Sample Project 1
         */
        name: string;
        /**
         * The tasksCompleted schema
         * example:
         * 3
         */
        tasksCompleted: number;
        /**
         * The tasksTotal schema
         * example:
         * 3
         */
        tasksTotal: number;
    })[];
    namespace ProjectsListJson {
        export type Items = {
            /**
             * The id schema
             * example:
             * 123
             */
            id: number;
            /**
             * The name schema
             * example:
             * Sample Project 1
             */
            name: string;
            /**
             * The tasksCompleted schema
             * example:
             * 3
             */
            tasksCompleted: number;
            /**
             * The tasksTotal schema
             * example:
             * 3
             */
            tasksTotal: number;
        };
        namespace Items {
            namespace AnyOf {
                /**
                 * The first anyOf schema
                 * example:
                 * {
                 *   "id": 123,
                 *   "name": "Sample Project 1",
                 *   "tasksCompleted": 3,
                 *   "tasksTotal": 3
                 * }
                 */
                export interface $0 {
                    /**
                     * The id schema
                     * example:
                     * 123
                     */
                    id: number;
                    /**
                     * The name schema
                     * example:
                     * Sample Project 1
                     */
                    name: string;
                    /**
                     * The tasksCompleted schema
                     * example:
                     * 3
                     */
                    tasksCompleted: number;
                    /**
                     * The tasksTotal schema
                     * example:
                     * 3
                     */
                    tasksTotal: number;
                }
                namespace $0 {
                    namespace Properties {
                        /**
                         * The id schema
                         * example:
                         * 123
                         */
                        export type Id = number;
                        /**
                         * The name schema
                         * example:
                         * Sample Project 1
                         */
                        export type Name = string;
                        /**
                         * The tasksCompleted schema
                         * example:
                         * 3
                         */
                        export type TasksCompleted = number;
                        /**
                         * The tasksTotal schema
                         * example:
                         * 3
                         */
                        export type TasksTotal = number;
                    }
                }
            }
        }
    }
}
